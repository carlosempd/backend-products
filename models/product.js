const mongoose = require('mongoose')

const historicalDataSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now }
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    priceHistory: {
        type: [ historicalDataSchema ],
        default: []
    },
    stockHistory: {
        type: [ historicalDataSchema ],
        default: []
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)