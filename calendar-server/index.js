const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createTask, getTask, deleteTask, updateTask, getAllTasks } = require('./controllers/taskController.js');

const app = express();
app.use(cors(
    {
        origin: "https://calendar-kqmtp1dzm-daryna-pastushenkos-projects.vercel.app/",
        methods: ['POST', 'GET'],
        credentials: true
    }
));
app.use(express.json());

mongoose.connect('mongodb+srv://DarynaPas:<password>@cluster0.brmpln1.mongodb.net/?retryWrites=true&w=majority');

app.post('/add', createTask);
app.get('/get', getTask);
app.delete('/delete/:id', deleteTask);
app.patch('/update', updateTask);
app.get('/', getAllTasks);

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server is Running");
});