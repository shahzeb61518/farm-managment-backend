const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Get routes object=> to get access to the routes
const companyListRoutes = require('./routes/companyList-routes');
const adminstrationRoutes = require('./routes/adminstration-routes');
const Users = require('./routes/users-routes');
const SOPs = require('./routes/SOPs-routes');
const Items = require('./routes/items-routes');
const Plants = require('./routes/plants-routes');
const Site = require('./routes/site-routes');
const Storage = require('./routes/storage-routes');
const Suppliers = require('./routes/suppliers-routes');
const Role = require('./routes/role-routes');
const category = require('./routes/category-routes');
const ForgotPassword = require('./routes/forgotpassword-routes');


const app = express();

// const url = "mongodb+srv://shahzeb:shahzebworkflo111@cluster0-byo5r.mongodb.net/<dbname>?retryWrites=true&w=majority"
const url = "mongodb+srv://bcpplatform:timbcpplatform@cluster0.rfhb0.mongodb.net/bcpplatform?retryWrites=true&w=majority"
// "mongodb+srv://shahzeb:shahzeb123@cluster0-tlmv5.mongodb.net/post-data?retryWrites=true&w=majority";
mongoose.connect(url, (err, db) => {
  if (err) throw console.log('err>>>', err);
  console.log("DB is Connected");
});


// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Accept-Encoding,Origin,Pragma,Referer,Cache-Control,User-Agent,Sec-Fetch-Dest,Sec-Fetch-Mode,Sec-Fetch-Site,Accept-Language,Connection,Accept,Content-Type,Content-Length,Host,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/api/company', companyListRoutes);
app.use('/api/users', Users);
app.use('/api/admin', adminstrationRoutes);
app.use('/api/sops', SOPs);
app.use('/api/items', Items);
app.use('/api/plants', Plants);
app.use('/api/role', Role);
app.use('/api/site', Site);
app.use('/api/storage', Storage);
app.use('/api/suppliers', Suppliers);
app.use('/api/category/', category);
app.use('/api/forgotpassword/', ForgotPassword);

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Page Not Found',
    data: null
  });
})

console.log("server is running");

module.exports = app;
