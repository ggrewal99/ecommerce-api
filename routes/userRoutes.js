const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	updateUser,
	updateOtherUser,
	loginAdmin,
	getAllUsers,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/login', loginAdmin);

router.put('/', protect, updateUser);
router.put('/:id', protect, admin, updateOtherUser);

router.get('/', protect, admin, getAllUsers);

module.exports = router;
