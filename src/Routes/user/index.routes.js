const userRoutes = require('express').Router();
const UserRoutes = require('./user.routes');
const CartRoutes = require('./cart.routes');
const FavoriteRoutes = require('./favourite.routes');
const orderRoutes = require('./order.routes');
const reviewRoutes = require('./review.routes');
const ProductRoutes = require('./product.routes');


userRoutes.use('/users' , UserRoutes);
userRoutes.use('/cart' , CartRoutes);
userRoutes.use('/favorite' , FavoriteRoutes);
userRoutes.use('/order', orderRoutes);
userRoutes.use('/review', reviewRoutes);
userRoutes.use('/products' , ProductRoutes);


module.exports = userRoutes;












