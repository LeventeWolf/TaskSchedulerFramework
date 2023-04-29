const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputModel = new Schema({
    // _id: auto-generated Object-id
    run: {type: Number, required: true},
    input: {type: String, required: true},
    status: {type: String, required: true},
    time: {type: String, required: true},
    string: {type: String, default: ''},
    date: {type: Date},
    priority: {type: String, required: true},
    script: {type: String, required: true, default: 'default'},
});

module.exports = mongoose.model('Input', inputModel);