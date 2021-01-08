const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

var PageSchema = new Schema({
    CreatedBy:{
        type:ObjectId,
        required:true
    },
    PageName:{
        type: String,
        unique: true,
        required: true
    },
    SubTitle:String,
    PageURL:{
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        lowercase: true,
        required: true
    },
    Phone_No: {
        type: String,
        required: true
    },
    WebsiteLink:String,
    Country:String,
    City:String,
    AdditionalInfo:String,
    SocialLink:{Facebook:{type:String},Instagram:{type:String},LinkedIn:{type:String},Twitter:{type:String},WhatsApp:{type:String}},
    WhoCanLikeYourPage:String,
    WhoCanViewYourPost:String,
    AccountSetting:{
        Enablefollow:{type:Boolean,default:false},
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
    PeopleFollowingThePage:[{type: String}],
    Button:{ButtonName: String,ButtonValue:String},
    TotalView:{type:Number,default:0},
    ViewStat:[{Location: String,Time:Date,MemkeepersUser:Boolean}]
});

module.exports = mongoose.model('Page',PageSchema);

