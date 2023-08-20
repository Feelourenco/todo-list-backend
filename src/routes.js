const express = require('express');
const controller = require('./controller/index');

const router = express.Router();

router.get('/tasks', controller.getTasksController.getAllTasks)
router.get('/task/:id', controller.getTasksController.getTask)

router.post('/create', controller.createController)

router.delete('/task/:id', controller.deleteTaskController)

router.put('/task/:id', controller.updateTaskController)

module.exports = router;