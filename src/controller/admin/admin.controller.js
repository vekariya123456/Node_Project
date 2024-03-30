const UserServieces = require('../../Services/user.service');
const userService = new UserServieces();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async(req , res) => {
    try {
        let admin = await userService.getUser({email: req.body.email});
        // console.log(admin);
        if(admin){
            return res.status(400).json({Message: `User is Alredy Registerd...`})
        }
        let hashPassword = await bcrypt.hash(req.body.password , 10);
        // console.log(hashPassword);
        admin = await userService.addNewUser({
            ...req.body,
            password:hashPassword,
            isAdmin: true
        });
        res.status(201).json({ admin, Message: 'New User is Added...'})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};

exports.loginAdmin = async(req , res) => {
    try {
        let admin = await userService.getUser({email: req.body.email , isDelete: false});
        console.log(admin);
        if(!admin){
            return res.status(404).json({Message: 'Email Not Found'})
        }
        let chaekPassword = await bcrypt.compare(req.body.password , admin.password);
        if(!chaekPassword){
            return res.status(400).json({Message: 'Password is not match...'})
        }
        let token = jwt.sign({adminId: admin._id} , 'Admin');
        res.status(200).json({token , Message: 'Login Successfully'})

    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
}

exports.getAllAdmin = async(req , res) => {
     try {
        let admin = await userService.getAllUsers({isDelete: false});
        // console.log(admin);
        res.status(200).json(admin)
     } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
     }
};

exports.getAdmin = async(req , res) => {
    try {
        let admin = await userService.getUserById(req.admin._id);
        if(!admin){
            return res.status(404).json({Message: 'Admin is not found'});
        }
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: `Internal server error.. ${console.error()} `});
    }
};

exports.updateAdmin = async(req , res) => {
    try {
        let admin = await userService.getUserById(req.admin._id);
        if(!admin){
            return res.status(404).json({Message: 'admin is not found'});
        }
        admin = await userService.updateUser(admin._id , {...req.body});
    
        res.status(202).json({admin , Message: 'Admin is Updated'});
        // console.log(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};

exports.deleteAdmin = async(req , res) => {
    try {
        let admin = await userService.getUserById(req.query.adminId);
        if(!admin){
            return res.status(404).json({Message: 'admin is not found'});
        }
        product = await userService.updateUser(admin._id , {isDelete: true});
        res.status(200).json({admin , Message: 'Admin is delete'});
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
}