const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});