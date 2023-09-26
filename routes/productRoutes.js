const express = require('express')
const {
    getAllProductsController,
    createProductController
} = require('../controllers/productController')
const { createProductMiddleware } = require('../middlewares/productMiddleware')
const router = express.Router()

router.post('', createProductMiddleware , createProductController)

module.exports = router