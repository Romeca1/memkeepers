const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const MessageSchema = new Schema({
  friendshipId: {
    type: ObjectId,
    required: true,
    ref: 'Friends'
  },
  author: {
    type: ObjectId,
    required: true,
    ref: 'Register'
  },
  block: {
    type: Boolean,
    default: false,
    required:true
  },
  blockedby:{
    type: ObjectId,
    ref: 'Register'
  },
  deletedby:[{
    deletedbyid:{
    type: ObjectId,
    ref: 'Register'
  }
  }],
  messagecontent:
  [{ 
  body: {
    type: String,
    required: true
  },
  author:{
    type: ObjectId,
    required: true,
    ref: 'user'
  },
  seen: {
    type: Boolean,
    default: false
  },
  seentime:{
    type: Date
  },
  delivered: {
    type: Boolean,
    default: false
  },
  messagetime: {
      type: Date,
      required:true
    }
  }]
  });


module.exports = mongoose.model('Message', MessageSchema);
