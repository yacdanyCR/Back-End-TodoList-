const express = require('express');
const config = require('../config.js');
const app = express()
const cors = require('cors');
const { taskRouter } = require('./routes/TaskRoute.js');

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.use(('/api/task'), taskRouter);

app.listen(port);