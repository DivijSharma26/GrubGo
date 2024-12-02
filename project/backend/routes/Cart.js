const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Cart = require('../models/Cart'); 

router.post('/addtocart', [
    body('userId').notEmpty(),
    body('item').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, item } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items.push(item);
            await cart.save();
        } else {
            await Cart.create({ userId, items: [item] });
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router; 