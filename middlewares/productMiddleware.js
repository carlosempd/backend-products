const { createProductValidatorSchema } = require("../validators/productValidator")

const createProductMiddleware = (req, res, next) => {
    const { error, value } = createProductValidatorSchema
        .validate(req.body)

    if (error) {
        return res.status(400).json({
            message: error.message
        })
    }

    req.value = value
    next()
}

module.exports = {
    createProductMiddleware
}