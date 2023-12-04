const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    id: String,
    description: String,
    label: String,
    date: String,
    color: String
})

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;