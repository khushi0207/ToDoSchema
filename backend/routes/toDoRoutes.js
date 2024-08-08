const express = require('express');
const {createTodo,getAllTodo, getTodoById, deleteTodo, updateTodo } = require('../controllers/todoController');

const router = express.Router();

router.post("/create-Todo",createTodo);
router.get("/getAllTodo",getAllTodo);
router.get("/getTodoById/:id",getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);
router.patch("/updateTodo/:id",updateTodo);

module.exports = router;