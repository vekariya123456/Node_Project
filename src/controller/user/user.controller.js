const UserServieces = require('../../Services/user.service');
const userService = new UserServieces();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req , res) => {
    try {
        let user = await userService.getUser({email: req.body.email});
        console.log(user);
        if(user){
            return res.status(400).json({Message: `User is Alredy Registerd...`})
        }
        let hashPassword = await bcrypt.hash(req.body.password , 10);
        // console.log(hashPassword);
        user = await userService.addNewUser({
            ...req.body,
            password:hashPassword,
           
        });
        res.status(201).json({user, Message: 'New User is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await userService.getUser({email: req.body.email, isDelete:false});
        console.log(user);
        if(!user){
            return res.status(404).json({Message: 'Email Not Found'});
        }
        let checkPassword = await bcrypt.compare(req.body.password, user.password);
        if(!checkPassword) {
            return res.status(400).json({Message: 'Password is not match...'})
        }
        let token = jwt.sign({userId: user._id} , 'User');
        res.status(200).json({token , Message: 'Login Successfully'})
    
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }

};



exports.getAllUser = async (req, res) => {
    try {
        let user = await userService.getAllUsers({isDelete: false});
        //console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});  
    }
};


exports.getUser = async(req , res) => {
    try {
       let user = await userService.getUserById(req.query.userId);
       if(!user){
        return res.status(404).json({Message: 'User is not found'});
    }
       res.status(200).json(user)
    } catch (error) {
       console.log(error);
       res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};



exports.updateUser = async(req , res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if(!user){
            return res.status(404).json({Message: 'User is not found'});
        }
        user = await userService.updateUser(user._id , {...req.body});
        res.status(202).json({user , Message: 'User is Updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
 };


 exports.deleteUser = async(req , res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if(!user){
            return res.status(404).json({Message: 'User is not found'});
        }
        user = await userService.updateUser(user._id , {isDelete: true});
        res.status(200).json({user , Message: 'User is delete'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
 };    


 exports.updatePassword = async(req, res) => {
    try {
        let user = await userService.getUserById(req.user_id);
        if(!user){
            return res.json({ message: `User Not Found...Please try Again...`});
        }
        let comparePassword = await bcrypt.compare(
            req.body.oldPassword, 
            user.password
        );
        if (!comparePassword) {
            return res.json({ message: `Old Password is not Match.. Please Try Again.`});
        }
        if(req.body.newPassword === req.body.oldPassword){
            return res.json({ message: `Old Password And New Password Are Same Plase Enter Diffrent Password..`});
        }
        if(req.body.newPassword !== req.body.confirmPassword){
            return res.json({ message: `New Password And Confirm Password is not Same.. Please Try Again.`});
        }
        let hashPassword = await bcryptjs.hash(newPassword, 10);
        user = await userService.updateUser(req.user._id, {password: hashPassword});
        res.status(200).json({ message: 'Password changed successfully.....👍🏻' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});
    }
};