const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get one user
router.get('/:id', getUser, (req, res) => {
    res.send(res.user);
});

// Create one user
router.post('/', async (req, res) => {
    const user = new User({
        id: req.body.id,
        username: req.body.username,
        password: req.body.password,
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update one user
router.patch("/:id", getUser, async (req, res) => {
    const fields = [
        "id",
        "username",
        "password"
    ]
    for (const field of fields) {
        if (req.body[field] !== undefined) {
            res.user[field] = req.body[field];
        }
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Delete one user
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: "Deleted user" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Middleware function
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findOne({ id: req.params.id });
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}

module.exports = router;
