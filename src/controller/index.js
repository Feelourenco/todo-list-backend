const createController = require('./createTaskController');
const getTasksController = require('./getTasksController');
const deleteTaskController = require('./deleteTaskController');
const updateTaskController = require('./updateTaskController');

module.exports = {
    createController,
    getTasksController,
    deleteTaskController,
    updateTaskController
}