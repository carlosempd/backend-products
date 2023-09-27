const {
    createProduct,
    getAllProductsPaginated,
    getProductById,
    deleteProductById,
    updateProductById
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

const updateProduct = ((req, res) => {
    if (!Object.keys(req.body).length) {
        return res.json({
            message: 'Nothing to update'
        })
    }
    updateProductById(req, res)
})

module.exports = {
    getAllProductsController,
    createProductController,
    getProductByIdController,
    deleteProduct,
    updateProduct
}