const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const toDoRoutes = require('./routes/toDoRoutes')

const app  = express();
app.use(bodyParser.json())
app.use(cors)

mongoose
.connect("mongodb://localhost:27017/todo").then(() =>{
    console.log("Connected");
})
.catch(() =>{
    console.log("Error!")
});

app.use('/api',toDoRoutes)

app.listen(process.env.PORT,() =>{
    console.log(`Server Started at ${process.env.PORT}`)
});