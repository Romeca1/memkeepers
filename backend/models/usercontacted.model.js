const mongoose = require('mongoose');
var crypto = require('crypto'); 
const Schema = mongoose.Schema;
let UserContacted = new Schema({
    Name:{
        type: String,
        required: true
        
    },
    Email: {
        type: String,
        lowercase: true,
        required: true
    },
    Phone_No: {
        type: String,
        unique: true,
    },
    Company:{
        type: String,
        required: true
    },
    Message:{
        type: String,
        required: true
    },
    ResponseMessage:{
        type: String
    },
    Status:{type:Number,default:1,required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: [{type: Date}]
}); 

module.exports = mongoose.model('UserContacted', UserContacted);