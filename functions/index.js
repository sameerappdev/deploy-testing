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

app.get('/demo', (req, res) => {
    res.json([
      {
        id: '001',
        name: 'Aayush',
      },
      {
        id: '002',
        name: 'rohit',
      },
      {
        id: '003',
        name: 'Mohit',
      },
    ]);
  });

app.listen(PORT_NO, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const serverless = require('serverless-http');
// const app = express();
// const router = express.Router();

// let records = [];


// router.get('/', (req, res) => {
//   res.send('App is running..');
// });

// app.get('/login', (req, res) => {
//   res.send('<h1>Please Login</h1>');
// });

// router.post('/add', (req, res) => {
//   res.send('New record added.');
// });

// router.delete('/', (req, res) => {
//   res.send('Deleted existing record');
// });

// router.put('/', (req, res) => {
//   res.send('Updating existing record');
// });


// router.get('/demo', (req, res) => {
//   res.json([
//     {
//       id: '001',
//       name: 'Aayush',
//     },
//     {
//       id: '002',
//       name: 'rohit',
//     },
//     {
//       id: '003',
//       name: 'Mohit',
//     },
//   ]);
// });

// app.use('/.netlify/functions/index', router);
// module.exports.handler = serverless(app);