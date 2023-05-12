const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputModel = new Schema({
    run: {type: Number, required: true},
    input: {type: String, required: true},
    script: {type: String, required: true, default: 'default'},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    time: {type: String, required: true},
    result: {type: String, required: true},
    date: {type: Date},
});

module.exports = mongoose.model('Input', inputModel);