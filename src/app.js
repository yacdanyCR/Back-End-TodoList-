const express = require('express');
const config = require('../config.js');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Working")
});

app.listen(port);