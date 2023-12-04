const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createTask, getTask, deleteTask, updateTask, getAllTasks } = require('./controllers/taskController.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/CalendarDB');

app.post('/add', createTask);
app.get('/get', getTask);
app.delete('/delete/:id', deleteTask);
app.patch('/update', updateTask);
app.get('/', getAllTasks);

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server is Running");
});