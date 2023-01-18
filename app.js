require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middlewares/not-found')

// Middleware
app.use(express.json())
app.use(express.static('./public'))

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
// app.get('/api/v1/tasks')         - get all the task
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - upadte single task
// app.delete('/api/v1/tasks/:id')  - delete task


// Port connection
const port = process.env.DEV_PORT || 3000;

// Database Connection
const connectionString = process.env.MONGO_URI
const start = async () => {
    try {
        await connectDB(connectionString)
        app.listen(port, () => console.log(`Server running on ${port}`))
    } catch (err) {
        console.error(err.message);
    }
}
start()