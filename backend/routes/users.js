const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

// // Get all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Get one user
// router.get('/:username', getUser, (req, res) => {
//     res.send(res.user);
// });

// // Create one user
// router.post('/', async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         password: req.body.password,
//     })
//     console.log('user', user)
//     try {
//         const newUser = await user.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({ message: error });
//     }
// });

// // Update one user
// router.patch("/:username", getUser, async (req, res) => {
//     const fields = [
//         "username",
//         "password"
//     ]
//     for (const field of fields) {
//         if (req.body[field] !== undefined) {
//             res.user[field] = req.body[field];
//         }
//     }
//     try {
//         const updatedUser = await res.user.save();
//         res.json(updatedUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// })

// // Delete one user
// router.delete("/:username", getUser, async (req, res) => {
//     try {
//         await res.user.remove();
//         res.json({ message: "Deleted user" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

// Middleware function
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findOne({ username: req.params.username });
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if (!userExists) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        const token = jwt.sign({
            username: userExists.username,
            id: userExists._id
        }, PROCESS.ENV.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: userExists, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: 'User Already Exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ username, password: hashedPassword });
        const token = jwt.sign({
            username: result.username,
            id: result._id
        }, PROCESS.ENV.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result, token });
    } catch (error) {

    }
})

module.exports = router;
