const {
    createProduct,
    getAllProductsPaginated,
    getProductById
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

module.exports = {
    getAllProductsController,
    createProductController,
    getProductByIdController
}