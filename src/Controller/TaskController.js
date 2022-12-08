const { Db } = require("../db/Db");
const { TaskModel } = require("../Model/TaskModel");
const db = new Db();
class TaskController {

    async getTask(req, res) {
        const connection = await db.getConnection();
        try {
            const result = await connection.query("SELECT * FROM Task");
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        } finally {
            connection.end();
        }
    }

    async addTask(req, res) {
        const connection = await db.getConnection();
        try {
            const { task } = req.body;
            const taskObj = new TaskModel(task);
            const result = await connection.query(`INSERT INTO Task (task) VALUES("${taskObj.getTask()}")`);
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        } finally {
            connection.end();
        }
    }

    async deleteTask(req, res) {
        const connection = await db.getConnection();
        try {
            const { id } = req.params;
            const result = await connection.query(`DELETE FROM Task WHERE id = ${id}`);
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.error(error);
        } finally {
            connection.end();
        }
    }

    async addCompleted(req, res) {
        const connection = await db.getConnection();
        try {
            const { id, completed } = req.body;
            const result = await connection.query(`UPDATE Task SET completeded=${completed} WHERE id=${id}`);
            res.status(200).json(result);
        } catch (error) {
            res.status(400);
            console.log(error);
        } finally {
            connection.end();
        }
    }
}

module.exports = {
    TaskController
}