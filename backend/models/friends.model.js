const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;
let FriendRequest = new Schema({
    Requester: {
        type: ObjectId,
        required: true
    },
    Recipient: {
        type: ObjectId,
        required: true
    },
    Status:{type:Number,default:1}
}); 

module.exports = mongoose.model('FriendRequest', FriendRequest);