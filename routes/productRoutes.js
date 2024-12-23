const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getAllProducts);

router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);

router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
