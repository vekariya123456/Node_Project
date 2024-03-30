const CartServieces = require('../../Services/cart.service');
const cartService = new CartServieces();

exports.addNewCart = async (req, res) => {
    try {
        let cart = await cartService.getCart({
            user: req.user._id,
            cartItem: req.body.cartItem,
            isDelete: false
        });
        if (cart) {
            return res.status(400).json({ Message: 'Cart is alredy exist' });
        }
        cart = await cartService.addNewCart({ ...req.body, user: req.user._id });
        res.status(201).json({ cart, Message: 'cart is Added...' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.getAllCart = async(req , res) => {
    try {
        let carts = await cartService.getAllCarts(req.query);
        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.getCart = async(req , res) => {
    try {
        let cart = await cartService.getCartById(req.query.cartId);
        if(!cart){
            return res.status(404).json({Message: 'cart is not found'});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.updateCart = async(req , res) => {
    try {
        let cart = await cartService.getCartById(req.query.cartId);
        if(!cart){
            return res.status(404).json({Message: 'cart is not found'});
        }
        cart = await cartService.updateCart(cart._id ,{...req.body});
        res.status(202).json({cart , Message: 'cart is Update'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.deleteCart = async(req , res) => {
    try {
        let cart = await cartService.getCartById(req.query.cartId);
        if(!cart){
            return res.status(404).json({Message: 'cart is not found'});
        }
        cart = await cartService.updateCart(cart._id , {isDelete: true});
        res.status(202).json({cart , Message: 'cart is Update'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
}