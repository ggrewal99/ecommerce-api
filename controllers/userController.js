const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	try {
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		await newUser.save();
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error registering user', error });
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		const token = jwt.sign(
			{ id: user._id, role: user.role },
			process.env.JWT_SECRET,
			{
				expiresIn: '1h',
			}
		);

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Error logging in', error });
	}
};

const loginAdmin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user || user.role !== 'admin') {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		const token = jwt.sign(
			{ id: user._id, role: user.role },
			process.env.JWT_SECRET,
			{
				expiresIn: '1h',
			}
		);

		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Error logging in', error });
	}
};

const updateUser = async (req, res) => {
	const userId = req.user.id;

	const updates = {};

	if (req.body.name) updates.name = req.body.name;
	if (req.body.email) updates.email = req.body.email;

	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		updates.password = await bcrypt.hash(req.body.password, salt);
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(userId, updates, {
			new: true,
		});

		if (!updatedUser) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({
			message: 'User updated successfully',
			user: updatedUser,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating user', error });
	}
};

const updateOtherUser = async (req, res) => {
	const { id } = req.params;
	const updates = {};

	if (req.body.name) updates.name = req.body.name;
	if (req.body.email) updates.email = req.body.email;

	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		updates.password = await bcrypt.hash(req.body.password, salt);
	}

	if (req.body.role) {
		if (!['user', 'admin'].includes(req.body.role)) {
			return res.status(400).json({ message: 'Invalid role' });
		}
		updates.role = req.body.role;
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(id, updates, {
			new: true,
		});

		if (!updatedUser) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json({
			message: 'User updated successfully',
			user: updatedUser,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating user', error });
	}
};

module.exports = {
	registerUser,
	loginUser,
	updateUser,
	updateOtherUser,
	loginAdmin,
};
