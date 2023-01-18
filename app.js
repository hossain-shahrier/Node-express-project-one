require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const tasks = require('./routes/tasks')
const app = express()


// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.render('index.html')
})
app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')         - get all the task
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - upadte single task
// app.delete('/api/v1/tasks/:id')  - delete task

// MongoDB

// Port connection
const port = process.env.DEV_PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`))
