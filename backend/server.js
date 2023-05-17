require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
