const Product = require('../models/product');
const Categories = require('../models/category');
const User = require('../models/user');

exports.getDashboardData = async (req, res, next) => {
	try {
		const productsCount = await Product.countDocuments();
		const categoriesCount = await Categories.countDocuments();
		const usersCount = await User.countDocuments();

		res.status(200).json({
			success: true,
			productsCount,
			categoriesCount,
			usersCount,
		});
	} catch (error) {
		next(error);
	}
};
