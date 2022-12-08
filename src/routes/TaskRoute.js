const express = require('express');
const { TaskController } = require('../Controller/TaskController');
const taskRouter = express.Router();

const task = new TaskController();

taskRouter.get(('/'), async (req, res) => {
    try {
        res.status(200).json(await task.getTask());
    } catch (error) {
        res.status(400);
        throw (error)
    }
});

taskRouter.delete(('/:id'), async (req, res) => {
    try {
        const { id } = req.params;
        res.status(200).json(await task.deleteTask(id))
    } catch (error) {
        res.status(400)
        throw (error)
    }
});

module.exports = {
    taskRouter
}