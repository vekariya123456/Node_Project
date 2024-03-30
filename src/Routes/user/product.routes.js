const express = require('express');
const productRoutes = express.Router();
const {userverifyToken} = require('../../helpers/veryfyToken')

const {
    
    getAllProducts,
    getProduct

} = require('../../controller/user/product.controller');


productRoutes.get('/get-all-product' ,userverifyToken, getAllProducts);
productRoutes.get('/get-product' ,  userverifyToken , getProduct);



module.exports = productRoutes;