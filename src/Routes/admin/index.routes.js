
const adminsRoutes = require('express').Router();
const productRoutes = require('./product.routes');
const UserRoutes = require('./admin.routes');
const CartRoutes = require('./cart.routes');
const ReviewRoutes = require('./review.routes');


adminsRoutes.use('/product' , productRoutes);
adminsRoutes.use('/user' , UserRoutes);
adminsRoutes.use('/cart' , CartRoutes);
adminsRoutes.use('/review' , ReviewRoutes);

module.exports = adminsRoutes;



