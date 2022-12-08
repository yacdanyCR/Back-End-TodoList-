const express = require('express');
const config = require('../config.js');
const app = express()
const cors = require('cors');
const { TaskController } = require('./Controller/TaskController.js');

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    const Task = new TaskController();
    res.json(await Task.getTask())
});

app.listen(port);