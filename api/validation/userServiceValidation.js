const Joi = require('joi');

exports.insertTasksSchema = Joi.array().items(Joi.object({
    description: Joi.string()
        .min(3)
        .max(30)
        .required(),

    responsable: Joi.string()
        .min(3)
        .max(30)
        .required(),

    status: Joi.string().valid('done', 'doing', 'todo').required()
}))