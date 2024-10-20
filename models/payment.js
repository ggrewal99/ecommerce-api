const { mongoose } = requre('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, enum: ['success', 'failed'], required: true },
    amount: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
