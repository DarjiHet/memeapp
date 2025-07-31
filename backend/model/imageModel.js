const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    uploadedAt:{
        type: Date,
        default: Date.now(),
    }
},{timestamps: true});

const imageModel = mongoose.model('Image', imageSchema);

module.exports = imageModel;