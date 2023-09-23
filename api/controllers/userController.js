const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');
const { insertTasks, getTasks } = require('../services/userService');

// test
exports.insertTasks = asyncErrorHandler(async (req, res, next) => {
    const tasks = req.body;

    try {
        const result = insertTasks(tasks);
        res.status(200).json(result);
    } catch (error) {
        return next(new ErrorHandler("Internal server error.", 500));
    }
});


exports.getTasks = asyncErrorHandler(async (req, res, next) => {
    const tasks = getTasks();
    res.status(200).json(tasks);
});