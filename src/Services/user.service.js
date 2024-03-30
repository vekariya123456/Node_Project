const User = require('../model/user.model');

module.exports = class UserServieces {

    //Add New User

    async addNewUser(body) {
        try {
            return await User.create(body);
        } catch (error) {
           console.log(error);
           return error.message; 
        }
    };

    
    //Get Single User

    async getUser(body) {
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    };

    
    //Get Single User BY Id

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;   
        }
    };

    
    //Update User 

    async updateUser(id, body) {
        try {
           return await User.findByIdAndUpdate(id, { $set: body}, { new: true});
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    };

    
    //Get AllUSer
    async getAllUsers(query) {
        try {
            let find = [
                { $match: { isDelete: false } },
             ];
            
            let result = await User.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    }

    
}