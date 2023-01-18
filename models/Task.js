const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        minlength: [2, 'Too short name'],
        maxlength: [30, 'Name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Task', TaskSchema)