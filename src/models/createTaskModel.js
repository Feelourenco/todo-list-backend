const connection = require('../db');

const create = async (title, description) => {
    const query = 'INSERT INTO tasks (title, description) VALUES (?, ?);'
    await connection.execute(query, [title, description]);
} 

module.exports = create;