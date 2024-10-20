const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({ message: 'Error fetching products', e });
    }
};

const createProduct = async (req, res) => {
    const { name, price, description, category, image, size } = req.body;

    try {
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            image,
            size
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
};

module.exports = {
    getAllProducts,
    createProduct
};