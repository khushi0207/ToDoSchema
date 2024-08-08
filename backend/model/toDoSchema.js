const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title:{
        required : true,
        type : String,
        unique : true,
        trim: true
    },
    description:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model("ToDo",toDoSchema)
