const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Get routes object=> to get access to the routes
const companyListRoutes = require('./routes/companyList-routes');
const adminstrationRoutes = require('./routes/adminstration-routes');
const userListRoutes = require('./routes/userList-routes');
const app = express();


const url = "mongodb+srv://shahzeb:shahzebworkflo111@cluster0-byo5r.mongodb.net/<dbname>?retryWrites=true&w=majority"
// "mongodb+srv://shahzeb:shahzeb123@cluster0-tlmv5.mongodb.net/post-data?retryWrites=true&w=majority";
mongoose.connect(url, (err, db) => {
  if (err) throw console.log('err>>>', err);
  console.log("DB is Connected");
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Content-Length,Host,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/api/company', companyListRoutes);
app.use('/api/user', userListRoutes);
app.use('/api/admin', adminstrationRoutes);

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Page Not Found',
    data: null
  });
})

console.log("server is running");

module.exports = app;
