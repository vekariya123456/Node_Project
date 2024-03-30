const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    gender: {
        type: String,
        enum:['Male','Female'] 
    },

    age: {
        type: Number,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    profileImage: {
        type: String
    },

    password: {
        type: String,
        required: true
    },

    mobileNo: {
        type: Number,
        unique: true
    },

    isDelete: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
},
{
     versionKey:false,
     timestamps: true
});

module.exports = mongoose.model('users', userSchema);

