const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');

// test
exports.insertTasks = asyncErrorHandler(async (req, res, next) => {

    const tasks = req.body;

    res.status(200).json(tasks);
});


exports.getTasks = asyncErrorHandler(async (req, res, next) => {

    const tasks = [
        {
            "description":"Criar Login",
            "responsable":"bruno",
            "status":"done"
        }, 
        {
            "description":"Criar Menu",
            "responsable":"bruno",
            "status":"doing"
        }, 
        {
            "description":"Criar tela de perfil",
            "responsable":"bruno",
            "status":"todo"
        }
    ]
    
    res.status(200).json(tasks);
});