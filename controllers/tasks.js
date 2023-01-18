const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks })
        // res.status(200).json({ tasks, amount: tasks.length })
        // res.status(200).json({ status: 'success', data: { tasks, amount: tasks.length } })
    } catch (err) {
        res.status(500).json({ message: err.name + '! ' + err.message })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ message: err.name + '! ' + err.message })
    }

}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findById({ _id: taskID })
        if (!task) {
            return res.status(404).json({ message: `No task with ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ message: err.name + '! ' + err.message })
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true, runValidators: true
        })
        if (!task) {
            return res.status(404).json({ message: `No task with ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ message: err.name + '! ' + err.message })
    }
}
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id })
        if (!task) {
            return res.status(404).json({ message: `No task with ${req.params.id}` })
        }
        res.status(200).json({ message: `Task, ${task.name} deleted!` })
    } catch (err) {
        res.status(500).json({ message: err.name + '! ' + err.message })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}