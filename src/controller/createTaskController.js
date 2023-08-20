const createModel = require('../models/createTaskModel');

const createTask = async(req, res) => {
    
    const { title, description } = req.body;

    if(!title) {
        return res.status(400).json({error: "Titulo obrigatório"});
    }

    try {
        await createModel(title, description);
        return res.status(201).json({ message: "Tarefa criada com sucesso !"});
        
    } catch (error) {
        return res.status(500).json({ message: "Erro ao inserir a tarefa !"});
    }
}

module.exports = createTask;