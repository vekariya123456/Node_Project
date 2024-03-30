const FavoriteServieces = require('../../Services/favourite.service');
const favoriteService = new FavoriteServieces();

exports.addNewFavorite = async(req , res) => {
    try {
        let favorite = await favoriteService.getFavorite({title: req.query.productId , isDelete: false});
        if(favorite){
            return res.status(400).json({Message: 'Favorite is alredy exist'});
        }
        favorite = await favoriteService.addNewFavorite({...req.body});
        res.status(201).json({favorite , Message: 'Favorite is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};

exports.getAllFavorite = async(req , res) => {
    try {
        let favorite = await favoriteService.getAllFavorite(req.query);
        res.status(200).json(favorite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
}

exports.deleteFavorite = async(req , res) => {
    try {
        let favorite = await favoriteService.getFavoriteById(req.query.Id);
        if(!favorite){
            return res.status(404).json({Message: 'favorite is not found'});
        }
        favorite = await favoriteService.updateFavorite(favorite._id , {isDelete: true});
        console.log(favorite);
        res.status(202).json({favorite , Message: 'favorite is Deleted'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
}