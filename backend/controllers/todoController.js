const ToDo = require('../model/toDoSchema')

exports.createTodo = async(req,res) =>{
    try{
    let todo = new ToDo(req.body)
    await todo.save()
    res.json({
        success:true
    })
} catch(error){
    res.json({
        success:false,
        error:error
    })
}
}
exports.getAllTodo = async(req,res) =>{
    try{
        const todos = await ToDo.find()
        res.json({
            success:true,
            data: todos,
        })
        
    }
    catch(error){
        res.json({
            success:false,
            data:error
        })
    }

}

exports.getTodoById = async(req,res) =>{
    try{
        const todo = await ToDo.findById(req.params.id)
        res.json({
            success:true,
            data:todo
        })
    }catch(error){
        res.json({
            success:false,
            data:error
        })
    }
}

exports.deleteTodo = async(req,res) =>{
    try{
        const todo = await ToDo.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            data:todo
        })
    }catch(error){
        res.json({
            success:false,
            data:error
        })
    }
}

exports.updateTodo = async(req,res) =>{
    try{

        const todo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true,});
        res.json({
            success:true,
            data:todo
        })

    }catch(error){
        res.json({
            success:true,
            data:error
        })
    }
}