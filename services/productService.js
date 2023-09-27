const Product = require("../models/product")

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            ...req.value,
        })

        const created = await product.save()
        return res.status(201).json({
            message: "Product created successfully",
            product: created
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const getAllProductsPaginated = async(req, res) => {
    const { page = 1, limit = 10, search } = req?.query || {};
    const filter = {}
    if (search) {
        filter.name = {
            $regex: `${ search }`,
            $options: 'i'
        }
    }

    try {
        const productList = await Product.find()
            .where({ isDeleted: false, ...filter })
            .limit(limit*1)
            .skip((page-1) * limit)
        const total = await Product.countDocuments();

        return res.status(200).json({
            data: productList,
            totalCount: total,
            totalPages: Math.ceil(total/limit),
            currentPage: page,
            perPage: limit
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        
        return res.status(200).json({
            data: product
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

}

module.exports = {
    createProduct,
    getAllProductsPaginated,
    getProductById
}