const { Db } = require("../db/Db");
const { TaskModel } = require("../Model/TaskModel");
const db = new Db();
class TaskController {

    async getTask(req, res) {
        try {
            const connection = await db.getConnection();
            const result = await connection.query("SELECT * FROM Task");
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        }
    }

    async addTask(req, res) {
        try {
            const { task } = req.body;
            const taskObj = new TaskModel(task);
            const connection = await db.getConnection();
            const result = await connection.query(`INSERT INTO Task (task) VALUES("${taskObj.getTask()}")`);
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const connection = await db.getConnection();
            const result = await connection.query(`DELETE FROM Task WHERE id = ${id}`);
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        }
    }
}

module.exports = {
    TaskController
}