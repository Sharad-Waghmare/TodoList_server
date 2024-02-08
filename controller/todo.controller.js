const todoModel = require('../model/todo.model')


// Get all todoList
async function getAlltodoList(req, res){
    try {
        const todoData = await todoModel.find();
        if(todoData){
            return res.status(200).json({
                data: todoData,
                message: "Successful"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


//Add todo Data
async function getAddtodoList(req, res){
    try {
        const {name, description} = req.body;

        const createTodo = new todoModel({
            name: name,
            description: description,
        });

        createTodo.save();

        if(createTodo){
            return res.status(201).json({
                data: createTodo,
                message: "todo Data",
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}


//
async function getUpdatetodo (req, res){
    try {
        const id = req.params.todo_id;
        const {name, description} = req.body;

        // const todoData = await todoModel.findOne({ _id: id});

        const updateTodo = await todoModel.updateOne({_id: id}, 
            {
                $set:{
                    name: name,
                    description: description,
                }
        });

        if(updateTodo.acknowledged){
            return res.status(201).json({
                data: updateTodo,
                message: "Updated Successfully"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};

//
async function getDeletetodo(req, res){
    try {
        const id = req.params.todo_id;

        const deleteTodo = await todoModel.deleteOne({ _id: id});
        if(deleteTodo.acknowledged){
            return res.status(200).json({
                message: "Delete successfully"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};


module.exports = {
    getAlltodoList,
    getAddtodoList,
    getUpdatetodo,
    getDeletetodo
}