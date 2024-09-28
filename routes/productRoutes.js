const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getAllProducts);

router.post('/', protect, admin, createProduct);

module.exports = router;