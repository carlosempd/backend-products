const Product = require("../models/product")

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            ...req.value,
        })

        const created = await product.save()
        return res.status(201).json({
            message: "Product created successfully",
            data: created
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
            .sort({ created: -1 })
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

const deleteProductById = async(req, res) => {
    try {
        const update = { isDeleted: true }
        const filter = { _id: req.params.id }
        const deleted = await Product.findOneAndUpdate(filter, update, {
            new: true
        })
        if (!deleted) {
            res.status(404).json({
                message: 'Product not found'
            })
        }
        res.status(200).json({
            message: 'Product deleted succesfully',
            data: deleted
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const updateProductById = async(req, res) => {
    try {
        const update = { ...req.body }
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        
        if (update?.price && update?.price !== product.price) {
            product.priceHistory.push({
                value: update.price
            })
        }
        if (update?.stock && update?.stock !== product.stock) {
            product.stockHistory.push({
                value: update.stock
            })
        }
        // Object.assign(product, req.update)
        for (let key in update) {
            product[key] = update[key];
        }
        await product.save()
        
        res.status(200).json({
            message: 'Product updated succesfully',
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
    getProductById,
    deleteProductById,
    updateProductById
}