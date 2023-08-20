const connection = require('../db');

const getAllTasks = async() => {
    const query = 'SELECT * FROM tasks;'
    const [result] = await connection.execute(query);
    return result;
}

const getTask = async (id) => {
    const query = 'SELECT * FROM tasks WHERE id = ?;'
    const [result] = await connection.execute(query, [id])
    return result
}

module.exports = {
    getAllTasks,
    getTask
}