const express = require('express');
const config = require('../config.js');
const app = express()
const cors = require('cors');
const { Db } = require('./db/Db.js');

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send("jack")
});

app.listen(port);