const express = require('express');
const cors = require('cors');
// Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web 
//page to be requested from another domain outside the domain from which the first resource was
// served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.

const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/user');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});