const express = require('express');
const { getAlltodoList, getAddtodoList, getUpdatetodo, getDeletetodo } = require('../controller/todo.controller');

const router = express.Router();

router.get('/getAlltodo', getAlltodoList);

router.post('/addtodo', getAddtodoList);

router.put('/updatetodo/:todo_id', getUpdatetodo);

router.delete('/deletetodo/:todo_id', getDeletetodo);

module.exports = router;