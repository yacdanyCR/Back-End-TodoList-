const { Db } = require("../db/Db")
const db = new Db();
class TaskController {
    async getTask() {
        const connection = await db.getConnection();
        const result = connection.query("SELECT * FROM Task");
        return result;
    }
}

module.exports = {
    TaskController
}