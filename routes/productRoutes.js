const express = require('express')
const {
    getAllProductsController,
    createProductController,
    getProductByIdController
} = require('../controllers/productController')
const { createProductMiddleware } = require('../middlewares/productMiddleware')
const router = express.Router()

router.post('', createProductMiddleware , createProductController)
router.get('/', getAllProductsController )
router.get('/:id', getProductByIdController)

module.exports = router