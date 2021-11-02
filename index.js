const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('ХАХАХАХА ну я вроде запустил')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })