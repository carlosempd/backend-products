const Product = require("../models/product")

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            ...req.value,
        })

        const created = await product.save()
        res.status(201).json({
            message: "Product created successfully",
            product: created
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


module.exports = {
    createProduct
}