
const getTasksModel = require('../models/getTasksModel');

const getAllTasks = async (req, res) => {  
    try {
        const tasks = await getTasksModel.getAllTasks();
        return res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro ao recuperar informações !"});
    }
}

const getTask = async (req, res) => {  
    try {
        const id = req.params.id;
        const task = await getTasksModel.getTask(id);
        return res.status(200).json(task);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro ao recuperar informações !"});
    }
}

module.exports = {
    getAllTasks,
    getTask
}
