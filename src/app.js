const express = require('express');
const config = require('../config.js');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Working")
});

app.listen(port);