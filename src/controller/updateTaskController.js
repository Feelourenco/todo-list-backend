const updateTaskModel = require('../models/updateTaskModel');
const getTasksModel = require('../models/getTasksModel');

const updateTask = async (req, res) => {

    try {
        const id = req.params.id;
        const { title, description } = req.body;

        console.log(id);
        
        const checkId = await getTasksModel.getTask(id);
        if(checkId == ''){
            res.status(500).json({ message: "Tarefa não encontrada !" })    
        }

        await updateTaskModel(id, title, description);
        return res.status(200).json({ message: "Tarefa editada com sucesso !" })
        
    } catch (error) {
        res.status(500).json({ message: "Erro ao editar a tarefa !" })
    }

}

module.exports = updateTask;