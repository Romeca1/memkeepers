const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const PageMessageSchema = new Schema({
  PageId: {
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


module.exports = mongoose.model('PageMessage', PageMessageSchema);
