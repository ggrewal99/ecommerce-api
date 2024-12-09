const express = require('express');
const router = express.Router();
const {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
} = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getAllCategories);
router.get('/:id', protect, admin, getCategoryById);
router.post('/', protect, admin, createCategory);
router.put('/:id', protect, admin, updateCategory);
router.delete('/:id', protect, admin, deleteCategory);

module.exports = router;
