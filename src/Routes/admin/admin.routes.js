const express = require('express');
const UserRoutes = express.Router();
const {adminverifyToken} = require('../../helpers/veryfyToken')

const {
    registerAdmin,
    loginAdmin,
    getAllAdmin,
    getAdmin ,
    updateAdmin ,
    deleteAdmin


} = require('../../controller/admin/admin.controller');

UserRoutes.post('/register-admin' , registerAdmin);
UserRoutes.post('/login-admin' ,loginAdmin );
UserRoutes.get('/get-all-admin' , adminverifyToken,  getAllAdmin);
UserRoutes.get('/get-admin' , adminverifyToken, getAdmin);
UserRoutes.put('/update-admin' , adminverifyToken, updateAdmin);
UserRoutes.delete('/delete-admin' , adminverifyToken, deleteAdmin);



module.exports = UserRoutes;