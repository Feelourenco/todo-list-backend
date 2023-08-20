const connection = require('../db');

const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks WHERE id = ?;'
    await connection.execute(query, [id])
}

module.exports = deleteTask