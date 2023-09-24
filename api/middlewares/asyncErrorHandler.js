const errorMessages = require('../utils/errorMessages')
module.exports=( method => (req, res, next) => {
    Promise.resolve(method(req, res, next).catch(error => {
        console.log(error);
        res.status(errorMessages.INTERNAL_SERVER_ERROR_CODE)
            .json({ message: errorMessages.INTERNAL_SERVER_ERROR_MESSAGE });
    }))
});