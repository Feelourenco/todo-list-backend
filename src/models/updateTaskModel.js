const connection = require('../db');

const updateTask = async (id, title, description) => {
    const query = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?;'
    await connection.execute(query, [title, description, id])
}

module.exports = updateTask