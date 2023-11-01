const express = require('express');
const app = express();
const port = 3000;


// Define a route that responds with "Hello, World!" for the root path
app.get('/', (req, res) => {
    res.send("hello world");
})

// Define a route that responds with a custom message for /about
app.get('/about', (req, res) => {
    res.send("this is about page")
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})