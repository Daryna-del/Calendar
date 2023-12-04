const TaskModel = require('../models/Task.js');

const createTask = async (req, res) => {
    const task = await TaskModel.create(req.body);
    task.date.toLocaleString();
    res.status(201).json({ task });
};

const getTask = async (req, res) => {
    const task = await TaskModel.findById(req.body._id);
    res.status(200).json({ task });
};

const getAllTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.status(200).json({ tasks });
}

const updateTask = async (req, res) => {
    const updatedTask = await TaskModel.findByIdAndUpdate(req.body._id, req.body);
    res.status(200).json({ msg: 'task modified', task: updatedTask });
};

const deleteTask = async (req, res) => {
    const removedTask = await TaskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'task deleted', task: removedTask });
};

module.exports.createTask = createTask;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
module.exports.getAllTasks = getAllTasks;