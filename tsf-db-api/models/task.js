const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskModel = new Schema({
    inputId: {type: mongoose.Schema.Types.ObjectId, ref: 'Input'},
    script: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    time: {type: String, required: true},
    result: {type: String, required: true},
    date: {type: Date, required: true},
});

module.exports = mongoose.model('Task', taskModel);