// import { getProduct, getProductById, createProduct, updateProduct, deleteProduct } from '../controller/ProductController';

const { getProduct, getProductById, createProduct, updateProduct, deleteProduct } = require('../controller/ProductController.js');

const express = require('express');

const router = express.Router();

router.get('/products', getProduct);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
