const express = require('express');
const FavoriteRoutes = express.Router();
const {userverifyToken} = require('../../helpers/veryfyToken')

const { addNewFavorite, getAllFavorite,  deleteFavorite } = require('../../controller/user/favourite.controller');


FavoriteRoutes.post('/add-new-favorite' , userverifyToken,  addNewFavorite);
FavoriteRoutes.get('/get-all-favorite' , userverifyToken,  getAllFavorite);
FavoriteRoutes.delete('/deletefavorite' , userverifyToken , deleteFavorite);




module.exports = FavoriteRoutes;