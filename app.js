const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send("Hello will code for food");
})

const port = process.env.PORT || 8152;

app.listen(port, () => console.log(`The server is well behaved today on port ${port}`))
