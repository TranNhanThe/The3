const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    todo_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});

const List = mongoose.model('List', listSchema);

module.exports = List;