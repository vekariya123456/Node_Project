const Order = require('../model/order.model');

module.exports = class OrderServieces {

    async addToOrder (body) {
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async addNewOrder(body) {
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    
    
    async updateOrder(id, body) {
        try {
            return await Order.findByIdAndUpdate(id, { $set: body }, { new: true }).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getOrder(body) {
        try {
            return await Order.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getOrderById(id) {
        try {
            return await Order.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getAllOrder(query) {
        try {
            let find = [
                { $match: { isDelete: false } },

            ];

            let result = await Order.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getAllOrders (body) {
        try {
            return await Order.find(body).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;            
        }
    };
};