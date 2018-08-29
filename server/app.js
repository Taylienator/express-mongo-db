const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://heroku_2vblbbtq:heroku_2vblbbtq@ds237832.mlab.com:37832/heroku_2vblbbtq' || 'mongodb://localhost/my-blog');

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));
module.exports = app;