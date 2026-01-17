const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;
require('dns').setServers(['1.1.1.1', '8.8.8.8']);


app.use(express.json());
app.use(express.static('public')); 

mongoose.connect('mongodb+srv://AbrayevDaniyal:9078563412@dogplush.zb2xhmx.mongodb.net/')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const taskSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: false 
    },
    priority: { 
        type: String, 
        enum: ['Low', 'Medium', 'High'], 
        default: 'Medium' 
    },
    completed: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true }); 


const Task = mongoose.model('Task', taskSchema);

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 }); 
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" });
    }
});


app.post('/tasks', async (req, res) => {
    try {
        
        const newTask = new Task({
            name: req.body.name,
            description: req.body.description,
            priority: req.body.priority
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask); 
    } catch (error) { 
        res.status(400).json({ error: error.message });
    }
});

app.put('/tasks/:id', async (req, res) => {
    try { 
        const task = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json({ success: true, message: "Task deleted" });
    } catch (error) {
        res.status(400).json({ error: "Invalid ID format" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});