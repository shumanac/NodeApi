
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },() => console.log("connected to db"))

//To listen to the server
app.listen(3000);

module.exports = app;
