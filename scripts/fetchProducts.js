const axios = require('axios');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/db');


const fetchAndSaveProducts = async () => {
    try {
        await connectDB();

        const response = await axios.get('https://fakestoreapi.com/dfghsdgsd');
        const products = response.data;

        if (!products || products.length === 0) {
            console.log('No products found to save.');
            return;
        }

        for (const product of products) {
            const newProduct = new Product(product);
            await newProduct.save();
        }

        console.log('Products have been saved to the database.');
    } catch (error) {
        console.error('Error fetching or saving products:', error);
    } finally {
        await mongoose.connection.close();
    }
};

fetchAndSaveProducts();
