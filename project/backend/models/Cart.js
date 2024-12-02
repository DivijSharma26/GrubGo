const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            id: String,
            name: String,
            img: String,
            price: Number,
            quantity: Number,
            option: String
        }
    ]
});

module.exports = mongoose.model('Carts', CartSchema);
