const express = require('express');
const mongoose = require('mongoose');
const dotenv  = require('dotenv').config();
const cors = require('cors');

const app = express();

// use express.json to get data into json format
app.use(express.json());

// port
const PORT = process.env.PORT || 8080;

// import routes
const todo_item_route = require('./routes/todoItems');

// cors
app.use(cors());

// connect to database
mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("[Database]: connected"))
.catch(err => console.log(err));

app.use('/', todo_item_route);

// add port and then connect to server
app.listen(PORT, () => console.log("[Server]: listening on port " + PORT));
