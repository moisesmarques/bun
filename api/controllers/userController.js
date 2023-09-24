const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const { insertTasks, getTasks } = require('../services/userService');
const errorMessages = require('../utils/errorMessages')

exports.insertTasks = asyncErrorHandler(async (req, res, next) => {
    const tasks = req.body;
    const { error } = await insertTasks(tasks);
    if(error){
        res.status(errorMessages.BAD_REQUEST_CODE).json(error);
    } else {
        res.status(200).json();
    }
});

exports.getTasks = asyncErrorHandler(async (req, res, next) => {
    const { tasks } = await getTasks();
    res.status(200).json(tasks);
});