const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

const todoRoute = require('./router/todo.router')
const app = express();
var PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cors());
var corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.listen(PORT, ()=>{
    console.log("server running on " + PORT);
});



mongoose.connect(process.env.MONGO_ATLAS_URL, {
})
.then(() => {
  console.log("MongooDB Connected!");
})
.catch((err) => {
  console.log(err.message);
});


app.use('/todo', todoRoute)