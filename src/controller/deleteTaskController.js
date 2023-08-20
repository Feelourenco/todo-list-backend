const deleteTaskModel = require('../models/deleteTaskModel');

const deleteTask = async (req, res) => {

    try {
        const id = req.params.id;
        console.log(id);
        await deleteTaskModel(id);
        return res.status(200).json({ message: "Tarefa escluida com sucesso !" })
        
    } catch (error) {
        res.status(500).json({ message: "Erro ao excluir a tarefa !" })
    }

}

module.exports = deleteTask;