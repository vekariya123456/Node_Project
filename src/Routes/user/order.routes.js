const express = require('express');
const OrderRoutes = express.Router();
const {userverifyToken} = require('../../helpers/veryfyToken')

const { addNewOrder, getAllOrders , getOrder , deleteOrder } = require('../../controller/user/order.controller');


OrderRoutes.post('/add-new-order' , userverifyToken,  addNewOrder);
OrderRoutes.get('/get-all-order' , userverifyToken,  getAllOrders);
OrderRoutes.get('/get-order' , userverifyToken,  getOrder);
OrderRoutes.delete('/delete-order' , userverifyToken , deleteOrder);




module.exports = OrderRoutes;