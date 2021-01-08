const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var CircleRequestSchema = new Schema({

    RequestFor:{
        type:ObjectId,
        unique:true,
        required:true
    },
    RequestForName:{
        type:String,
        required:true
    },
    RequestForimageURL:{
        type:String,
        required:true
    },
    CircleData:[{
        CircleName: 
        {
        type: String,
        required: true
        },
        CircleURL:
        {
            type: String,
            required: true
        },
        CircleimageURL:
        {
            type: String,
            required: true
        },
        JoinedGround:{
            type:Boolean,
            default:false
        },
        ApprovedByAdmin:{
            type:Boolean,
            default:false
        },
        RequestBy:{
            type:ObjectId,
            required:true
        },
        RequestByName:{
            type:String,
            required:true
        },
        TotalMember:{
            type:Number,
            required:true
        }
    }]
});

module.exports = mongoose.model('CircleRequest',CircleRequestSchema);

