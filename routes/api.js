const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
const adminRouter = require("./admin");

//Sort According To Date, Newly Created At Top.

router.use("/admin", adminRouter);

const PUBLIC_PARAMS = "title author views date questions";

router.get("/", (req, res) => {
  res.json("You Have Reached The Api EndPoint.");
})

router.get("/all", async (req, res) => {
  try {
  	let quizes = undefined;// leaving out password
  	if(req.query.page){//Runs even when page = 0 becuase it is a string
  		const page = parseInt(req.query.page);
  		const limit = parseInt(req.query.limit) || 25;
  		//totalQuizes = await Quiz.count();
      //Sort By Most Viewed First
  		quizes = await Quiz.find({}, PUBLIC_PARAMS).sort({"views": -1}).skip(limit*page).limit(limit);
  	}else{
  		quizes = await Quiz.find({}, PUBLIC_PARAMS).sort({"views": 1});
  	}

  	//quizes = await Quiz.find();
  	if(req.query.flag === "q-off"){
    	//leaving out password
    	quizes = await quizes.map((item) => {
    		item.questions = item.questions.map(() => []);
    		return item;
    	})
  	}

  	if(quizes.length){
    	res.json(quizes);
  	}else{
  		res.json({msg:"No More Quizes To Load"})
  	}
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.get("/search", async(req, res) => {	
	if(req.query.q){
			let quizes = []; 
		 	if(req.query.page){//Runs even when page = 0 becuase it is a string
  			const page = parseInt(req.query.page);
  			const limit = parseInt(req.query.limit) || 25;
				quizes = await Quiz.find({$text:{$search: req.query.q}}, PUBLIC_PARAMS).skip(limit*page).limit(limit);
			}else{
				quizes = await Quiz.find({$text:{$search: req.query.q}}, PUBLIC_PARAMS);
			}

			if(req.query.flag === "q-off"){//Excluding Questions Data
    		quizes = await quizes.map((item) => {
    			item.questions = item.questions.map(() => []);
    			return item;
    		})
  		}			

			if(quizes.length){
				res.status(200).json(quizes);
			}else{
				res.status(404).json({msg:"No More Quizes To Load"})
			}
	}else{
		res.status(400).json({err: "query Not Defined"})
	}	
})

router.get("/one/:id", async (req, res, next) => {
  try {
    let quiz = undefined;


    if (req.query.flag === "q-only") {
      //send only questions
      quiz = await Quiz.findById(req.params.id, "questions");
    } else {
      quiz = await Quiz.findById(req.params.id,PUBLIC_PARAMS);
    }

    if(!quiz){
      //No Quiz is found exit
    	res.status(404).json({err: "Such Quiz Doesn't Exist"});
    	return ;
    }

    if (req.query.flag === "q-off") {
      //Set questions to empty questions
      quiz.questions = quiz.questions.map(() => []);
    }


    if(!req.query.flag){
    	//Increase Views By 1
    	await Quiz.updateOne({ _id: req.params.id }, { $inc: {views: 1}})
    }

    if(quiz){
    	quiz.password = undefined; //Never send back the password
  	}
    res.status(200).json(quiz);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

router.post("/add", (req, res) => {
  try{
  	if(req.body && req.body.views){//So Every Post Has 0 Plays When It is Created
  		req.body.views = 0;
  	}

    //If We Have Got Proper Data For Creating Quiz
  	if(req.body && req.body.title && req.body.author && req.body.password && req.body.questions){
  		const quiz = new Quiz(req.body);//Create A New Quiz From Body
  		quiz
    		.save()
    		.then((data) => {
    			data.password = undefined;//Remove Password For Security Purposes
    			return res.json(data);//Send Back Data And Exit
    		})
    		.catch((err) => res.json({ message: err.message }));
  	}else{
  		res.status(400).json({err: "Invalid Request"})
  	}
	}catch(err){
		res.status(400).json({err: err.message});
	}
});

router.patch("/add", async (req, res) => {
  try {

  	if(!req.body._id){//if we don't have an id send back error
  		res.status(400).json({err: "Quiz ID Not Provided."})
  		return;
  	}

  	const quizPass = await Quiz.findById(req.body._id, "password");//get only the password of the quiz

    if (req.body._password === quizPass.password) {//if correct password then update quiz
      if(req.body.title){
      	await Quiz.updateOne({_id: req.body._id}, {$set:{title: req.body.title}});
      }
      if(req.body.author){
      	await Quiz.updateOne({_id: req.body._id}, {$set:{author: req.body.author}});
      }
      if(req.body.password){
      	await Quiz.updateOne({_id: req.body._id}, {$set:{password: req.body.password}});
      }
      if(req.body.questions){
      	await Quiz.updateOne({_id: req.body._id}, {$set:{questions: req.body.questions}});
      }
      //Remove Passwords From The Body
      delete req.body._password;
      delete req.body.password;
      res.status(201).json(req.body);
    } else {
      res.status(400).json({ err: "Wrong Password" });
    }
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});


//You might wanan do /del/:id and then instead of req.body._id use req.params.id
router.delete("/", async (req, res) => {
  try {
    const pass = await Quiz.findById(req.body._id, "password");

    if (pass && req.body._password === pass.password) {
      const deletedQuiz = await Quiz.deleteOne({ _id: req.body._id });
      if(deletedQuiz.deletedCount){
      	res.status(200).json({ msg: "Quiz Deleted Succesfully" });
    	}else{
    		res.status(404).json({err:"Invalid ID"})
    	}
    } else {
      res.status(400).json({ err: "Wrong Password" });
    }
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});


module.exports = router;
