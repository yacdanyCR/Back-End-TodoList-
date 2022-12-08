const mysql = require('promise-mysql');
const config = require('../../config.js');

class Db {
    #host
    #user
    #password
    #database
    #port

    constructor() {

    }

    getConnection() {
        return mysql.createPool({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database,
            port: config.port
        });
    }
}

module.exports = {
    Db
}