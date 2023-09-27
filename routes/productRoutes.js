const express = require('express')
const {
    getAllProductsController,
    createProductController,
    getProductByIdController,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')
const { createProductMiddleware } = require('../middlewares/productMiddleware')
const router = express.Router()

router.post('', createProductMiddleware , createProductController)
router.get('/', getAllProductsController )
router.get('/:id', getProductByIdController)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

module.exports = router