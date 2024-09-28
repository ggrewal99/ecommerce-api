const { mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    // TODO
});

const Order = mongoose.model('Product', orderSchema);

module.exports = Order;