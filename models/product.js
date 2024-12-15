const { mongoose } = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true },
		description: { type: String, required: true },
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		imageUrl: { type: String, required: true },
		sizes: [
			{
				size: { type: Number, default: 0 },
				stock: { type: Number, default: 0 },
			},
		],
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models.Product || mongoose.model('Product', productSchema);
