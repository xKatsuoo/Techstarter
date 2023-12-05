const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
    res.send(`
      <html>
      <head>
        <title>Formular</title>
      </head>
      <body>
        <h1>Formular</h1>
        <form action="/formdata" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="age">Alter:</label>
          <input type="number" id="age" name="age" required><br><br>
          <input type="submit" value="Absenden">
        </form>
      </body>
      </html>
    `);
  });

app.get('/uuid', function (req, res) {
  const { v4: uuidv4 } = require('uuid');
  const uuid = uuidv4();
  res.send(uuid);
});

app.get('/user-agent', function (req, res) {
  const userAgent = req.get('User-Agent');
  res.send(userAgent);
});

app.get('/headers', function (req, res) {
  res.json(req.headers);
});

app.get('/url', function (req, res) {
  const url = req.url;
  res.send(url);
});

app.get('/json', function (req, res) {
  const json = {
    person: {
      name: 'John',
      age: 30
    }
  };
  res.json(json);
});

app.get('/xml', function (req, res) {
  const xml = '<person><name>Jeff</name><age>30</age></person>';
  res.type('application/xml');
  res.send(xml);
});

app.post('/formdata', function (req, res) {
  const formData = req.body;
  console.log(formData);
  res.send('Form data received successfully!');
});

app.listen(3100, function () {
  console.log('Server listening on port 3100');
});