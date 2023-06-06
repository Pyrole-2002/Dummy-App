const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    discountPercentage: {
        type: Number,
        float: true,
    },
    rating: {
        type: Number,
        float: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    image: {
        type: String,
    },
    provider: {
        type: String,
    },
    subscribers: {
        type: [String],
    }
});

module.exports = mongoose.model('Product', productSchema);
