const Joi = require('joi')

const createProductValidatorSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    sku: Joi.string().required(),
    image: Joi.string(),
    tags: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().integer().required(),
})

module.exports = {
    createProductValidatorSchema
}