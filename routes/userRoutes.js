const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	updateUser,
	updateOtherUser,
	loginAdmin,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/login', loginAdmin);

router.put('/update', protect, updateUser);
router.put('/update/:id', protect, admin, updateOtherUser);

module.exports = router;
