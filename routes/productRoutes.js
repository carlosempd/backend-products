const express = require('express')
const {
    getAllProductsController,
    createProductController,
    getProductByIdController,
    deleteProduct
} = require('../controllers/productController')
const { createProductMiddleware } = require('../middlewares/productMiddleware')
const router = express.Router()

router.post('', createProductMiddleware , createProductController)
router.get('/', getAllProductsController )
router.get('/:id', getProductByIdController)
router.delete('/:id', deleteProduct)

module.exports = router