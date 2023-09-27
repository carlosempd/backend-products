const {
    createProduct,
    getAllProductsPaginated
} = require("../services/productService")

const getAllProductsController = ((req, res) => {
    getAllProductsPaginated(req, res)
})

const createProductController = ((req, res) => {
    createProduct(req, res)
})

module.exports = {
    getAllProductsController,
    createProductController
}