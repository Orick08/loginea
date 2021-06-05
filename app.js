const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// ROUTES
const userRoute = require('./api/routes/users');
app.use('/user', userRoute);


module.exports = app;