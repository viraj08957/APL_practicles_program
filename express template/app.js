const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use bodyParser to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form for POST request
app.get('/', (req, res) => {
    res.render('index');
});

// Handle GET request
app.get('/get', (req, res) => {
    res.render('get', { message: 'This is a GET request response.' });
});

// Handle POST request
app.post('/post', (req, res) => {
    const message = req.body.message;
    res.render('post', { submittedMessage: message });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
