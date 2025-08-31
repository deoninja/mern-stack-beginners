const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
} = require('../controllers/productController');

// GET all products
router.get('/', getProducts);

// POST create product
router.post('/', createProduct);

module.exports = router;
