const { mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String, required: true },
    sizes: [
        {
            size: { type: String, required: true },
            stock: { type: Number, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
