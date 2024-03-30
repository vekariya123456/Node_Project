const Cart = require('../model/cart.model');

module.exports = class CartServices{

    async addNewCart (body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// GET ALL ORDER
    async getAllCarts (body) {
        try {
            return await Cart.find(body).populate('cartItem');
        } catch (error) {
            console.log(error);
            return error.message;            
        }
    };

// GET SPECIFIC ORDER
    async getCart (body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// GET SPECIFIC ORDER BY ID
    async getCartById (id) {
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// DELETE ORDER
    async deleteCart (id, body){
        try {
            return await Cart.findOneAndUpdate(id, { $set: body} , { new : true });
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    };


    async updateCart (id, body){
        try {
            return await Cart.findOneAndUpdate(id, { $set: body} , { new : true });
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    };

    async updateMany(body) {
        try {
            return await Cart.updateMany(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
}