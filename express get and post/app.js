const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use bodyParser to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a simple HTML form for POST request
app.get('/', (req, res) => {
    res.send(`
    <html>
      <body>
        <h1>Express.js GET and POST Example</h1>
        <form method="post" action="/post">
          <input type="text" name="message" placeholder="Type a message">
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Handle GET request
app.get('/get', (req, res) => {
    res.send('This is a GET request response.');
});

// Handle POST request
app.post('/post', (req, res) => {
    const message = req.body.message;
    res.send(`You submitted: "${message}"`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
