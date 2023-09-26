const Product = require("../models/product")
const { createProduct } = require("../services/productService")

const getAllProductsController = ((req, res) => {
    res.json({
        message: 'List of products'
    })
})

const createProductController = ((req, res) => {
    createProduct(req, res)
})

module.exports = {
    getAllProductsController,
    createProductController
}