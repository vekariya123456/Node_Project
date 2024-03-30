const CartServieces = require('../../Services/cart.service');
const cartService = new CartServieces();

exports.getAllCart = async(req , res) => {
    try {
        let carts = await cartService.getAllCarts(req.query);
        res.status(200).json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};