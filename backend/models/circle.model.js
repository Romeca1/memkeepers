const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var CircleSchema = new Schema({
    CreatedBy:{
        type:ObjectId,
        required:true
    },
    CircleName:{
        type: String,
        unique: true,
        required: true
    },
    SubTitle:String,
    CircleURL:{
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        lowercase: true,
        required: true
    },
    Country:String,
    AdditionalInfo:String,
    SocialLink:{Facebook:{type:String},WhatsApp:{type:String}},
    WhoCanJoinYourCircle:String,
    WhoCanViewCirclePost:String,
    AccountSetting:{
        SendNotification:{type:Boolean,default:false},
        TextMessageOnPhone:{type:Boolean,default:false},
        EnabbleTagging:{type:Boolean,default:false},
        EnabbleSoundNotification:{type:Boolean,default:true}   
    },
    ProfileImage:{ 
        type: String,
    },
    BackgroundImage:{ 
        type: String,
    },
    DateCreated: Date,
    PeopleFollowingTheCircle:[{type: String}],
    TotalView:{type:Number},
    Button:{ButtonName: String,ButtonValue:String},
});

module.exports = mongoose.model('Circle',CircleSchema);

