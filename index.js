const express = require("express");
const server = express();

const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const apiRouter = require("./routes/api");
require('dotenv').config();


//"mongodb://localhost/quizes"

//Routes Information
//api/all For Getting All Data,  uses pagination if page is given as query and set flag as query to q-off for not fetching questions
//api/seacrh For searching through data, uses pagination if page is given as query and set flag as query to q-off for not fetching questions
//api/one/:id For Getting Only One Quiz By ID, flag q-only for when you want only questions and q-off for not fetching questions
//api/add For Posting Only One Quizer
//api/add For Patching Only One Quiz, _id and _password are important in body, _id for identifying quiz and _password for accessing quiz, _password is prev password and password is the new password for the quiz
//admin For Editing Data


mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,//To Use Indexes In This Schema
  })
  .then(() => console.log("Connection Established With MongoDb Database"))
  .catch((err) => console.log(err.message));

//server.use(cors());//Don't Need It Anymore

server.use(express.json());

server.use("/api", apiRouter);

server.use(express.static(path.join(__dirname, 'build')));
//Serving React Here
server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 8080;

server.get("/", (req, res) => {
  res.send("<h1>React App</h1>");
})

server.listen(PORT, () => {
  console.log(`Server Is Up At Port ${PORT}`);
});
