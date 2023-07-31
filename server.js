const express = require("express");

const host = 'localhost';
const port = 3333;
const app = express();

app.use(express.static('public'))



app.listen(port, host, () => {
    console.log('Server is running on http://${host}:${port}');
});