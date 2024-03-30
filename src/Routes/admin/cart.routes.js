const express = require('express');
const CartRoutes = express.Router();
const { adminverifyToken } = require('../../helpers/veryfyToken')

const {  getAllCart } = require('../../controller/admin/cart.controller');

CartRoutes.get('/get-all-cart' , adminverifyToken  ,getAllCart );




module.exports = CartRoutes;