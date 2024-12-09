const Category = require('../models/category');

const getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find().select('name description');
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching categories', error });
	}
};

const getCategoryById = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.findById(id).select('name description');
		if (!category) {
			return res.status(404).json({ message: 'Category not found' });
		}
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching category', error });
	}
};

const createCategory = async (req, res) => {
	console.log('Request body:', req.body);

	const { name, description } = req.body;
	try {
		if (await Category.findOne({ name })) {
			return res.status(409).json({ message: 'Category already exists' });
		}
		const newCategory = new Category({ name, description });
		await newCategory.save();
		res.status(201).json(newCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error creating category', error });
	}
};

const updateCategory = async (req, res) => {
	const { id } = req.params;
	const { name, description } = req.body;
	try {
		const updatedCategory = await Category.findByIdAndUpdate(
			id,
			{ name, description },
			{ new: true }
		);
		res.status(200).json(updatedCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error editing category', error });
	}
};

const deleteCategory = async (req, res) => {
	const { id } = req.params;
	try {
		await Category.findByIdAndDelete(id);
		res.status(200).json({ message: 'Category deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting category', error });
	}
};

module.exports = {
	getAllCategories,
	getCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
};
