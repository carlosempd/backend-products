const {
    createProduct,
    getAllProductsPaginated,
    getProductById,
    deleteProductById
} = require("../services/productService")

const getAllProductsController = ((req, res) => {
    getAllProductsPaginated(req, res)
})

const createProductController = ((req, res) => {
    createProduct(req, res)
})

const getProductByIdController = ((req, res) => {
    getProductById(req, res)
})

const deleteProduct = ((req, res) => {
    deleteProductById(req, res)
})

module.exports = {
    getAllProductsController,
    createProductController,
    getProductByIdController,
    deleteProduct
}