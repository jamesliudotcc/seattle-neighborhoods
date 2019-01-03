const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const pug = require('pug');

const app = express();

// Mount middlewares

app.set('view engine', 'pug');

// Static files

app.use(express.static('public'));

// Get routes
app.get('/', (req, res) => {
  db.Neighorhood.findAll().then(neighborhoods => {
    arr_from_db = neighborhoods.map(neighborhood => ({
      name: neighborhood.name,
      link: neighborhood.link,
      photo: neighborhood.photo,
      description: neighborhood.description,
    }));
    console.log(arr_from_db);
    res.render('index', arr_from_db);
  });
  //   res.send('OK');
});

// Import all routes from the neighborhoods routes file

// app.use('/neighborhoods', require('./routes/neighborhoods'));

// Listen on Port 3000

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
