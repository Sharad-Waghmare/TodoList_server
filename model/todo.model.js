const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true
    },
    
    createdAt:{
        type: Date,
        default: Date.now(),
    },
});

const todoModel = mongoose.model("Todo", todoListSchema);
module.exports = todoModel;
