require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;
const PORT_NO = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/google', (req, res) => {
  res.send('Google');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please Login</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>Youtube</h2>');
});

app.listen(PORT_NO, () => {
  console.log(`Example app listening on port ${port}`);
});
