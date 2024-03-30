const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    isDelete:{
        type:Boolean,
        default:false
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('favorites' , favoriteSchema);