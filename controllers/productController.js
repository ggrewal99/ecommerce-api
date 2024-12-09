const Product = require('../models/product');

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().populate('category', 'name');
		res.status(200).json(products);
	} catch (e) {
		res.status(500).json({ message: 'Error fetching products', e });
	}
};

const createProduct = async (req, res) => {
	const { name, price, description, category, imageUrl, sizes } = req.body;
	console.log(req.body);

	try {
		const newProduct = new Product({
			name,
			price: parseFloat(price),
			description,
			category,
			imageUrl,
			sizes: sizes.map(({ size, stock }) => ({ size, stock })),
		});

		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		console.error(error.stack);
		res.status(500).json({ message: 'Error creating product', error });
	}
};

const updateProduct = async (req, res) => {
	const { id } = req.params;
	const { name, price, description, category, imageUrl, sizes } = req.body;

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{
				name,
				price: parseFloat(price),
				description,
				category,
				imageUrl,
				sizes: sizes.map(({ size, stock }) => ({ size, stock })),
			},
			{ new: true }
		);
		res.status(200).json(updatedProduct);
	} catch (error) {
		console.error(error.stack);
		res.status(500).json({ message: 'Error updating product', error });
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	updateProduct,
};
