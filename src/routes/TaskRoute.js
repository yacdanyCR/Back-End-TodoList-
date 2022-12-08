const express = require('express');
const { TaskController } = require('../Controller/TaskController');
const taskRouter = express.Router();

const task = new TaskController();

taskRouter.get(('/'), task.getTask);
taskRouter.post(('/'), task.addTask);
taskRouter.delete(('/:id'), task.deleteTask);

module.exports = {
    taskRouter
}