const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello will code for food");
})

const port = process.env.PORT || 8152;

app.listen(port, () => console.log("The server is well behaved today"))
