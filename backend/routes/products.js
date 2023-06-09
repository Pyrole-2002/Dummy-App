const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const auth = require('../middleware/auth');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Get all products for a user
router.get('/:username', async (req, res) => {
    try {
        const username = req.params.username
        const products = await Product.find({
            $or: [
                { provider: username },
                // { subscribers: { $in: [username] } }
            ]
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create one product
router.post('/', async (req, res) => {
    const product = new Product({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage,
        rating: req.body.rating,
        stock: req.body.stock,
        brand: req.body.brand,
        category: req.body.category,
        thumbnail: req.body.thumbnail,
        image: req.body.images,
        provider: req.body.provider,
        subscribers: req.body.subscribers
    })
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one product
router.patch("/:id", getProduct, async (req, res) => {
    const fields = [
        "id",
        "title",
        "description",
        "price",
        "discountPercentage",
        "rating",
        "stock",
        "brand",
        "category",
        "thumbnail",
        "image",
        "provider",
        "subscribers"
    ]
    for (const field of fields) {
        if (req.body[field] !== undefined) {
            res.product[field] = req.body[field];
        }
    }
    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete one product
router.delete("/:id", getProduct, async (req, res) => {
    try {
        await res.product.deleteOne();
        res.json({ message: "Deleted Product" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware function
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.product = product;
    next();
}

module.exports = router;
