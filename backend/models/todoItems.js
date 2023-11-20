// import mongoose to create new schema
const mongoose = require('mongoose');

// create schema
const todo_item_schema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    }
})

// export current schema
module.exports = mongoose.model('todo', todo_item_schema);