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

router.get('/getcart/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            res.json({ success: true, items: cart.items });
        } else {
            res.json({ success: false, error: 'Cart not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

router.post('/removecartitem', [
    body('userId').notEmpty(),
    body('itemId').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, itemId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items = cart.items.filter(item => item.id !== itemId);
            await cart.save();
            res.json({ success: true, items: cart.items });
        } else {
            res.json({ success: false, error: 'Cart not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router;