const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

const ADMIN_PASS = process.env.ADMIN_PASS;

router.post("/", async (req,res) => {
	if(req.body && req.body._method){
		if(req.body._method === "check"){
			if(req.body.password === ADMIN_PASS){
				res.status(200).json({msg: "Right Password"});
			}else{
				res.status(400).json({err: "Wrong Password"});
			}
		}else if(req.body._method === "show"){
			if(req.body.password && req.body._id){
				if(req.body.password === ADMIN_PASS){
					try{
						const quiz = await Quiz.findById(req.body._id, "title password _id ");
						if(quiz){
							res.status(200).json(quiz);
						}else{
							res.status(404).json({err: "No Quiz Exists With Such ID"})
						}
					}catch(err){
						res.status(400).json({err: err.message});
					}
				}else{
					res.status(400).json({err: "Wrong Password"});
				}
			}else{
				res.status(400).json({err: "Password Or Id Is Not Defined"})
			}
		}else{
			res.status(400).json({err: "Method Is Not Defined"});
		}
	}else{
		res.status(400).json({err: "Invalid Method"});
	}
});

router.delete("/", async (req, res) => {
	if(req.body && req.body.password && req.body._id){
		if(req.body.password === ADMIN_PASS){
			 const deletedStatus = await Quiz.deleteOne({_id: req.body._id});
			 if(deletedStatus.deletedCount){
      		res.status(200).json({ msg: "Quiz Deleted Succesfully" });
    		}else{
    			res.status(404).json({err:"Invalid ID"})
    		}
		}else{
			res.status(400).json({err: "Wrong Password"})
		}
	}else{
		res.status(400).json({err:"Password Or ID Is Not Defined"});
	}
})

module.exports = router;