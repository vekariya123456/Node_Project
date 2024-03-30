const Favorite = require('../model/favourite.model');

module.exports = class FavoriteServieces {


    //Add new Favorite


    async addNewFavorite(body) {
        try {
            return await Favorite.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    
    async updateFavorite(id, body) {
        try {
            return await Favorite.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getFavorite(body) {
        try {
            return await Favorite.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get single CartById
    
    async getFavoriteById(id) {
        try {
            return await Favorite.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    async getAllFavorite(query) {
        try {
            let find = [
                { $match: { isDelete: false } },

            ];

            let result = await Favorite.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

}