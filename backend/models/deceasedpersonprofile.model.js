const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;

let DeceasedPerson = new Schema({
    First_Name:{
        type: String,
        required: true,
        minlength: 3
        
    },
    Last_Name: {
        type: String
    },
    Email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        minlength: 3
    },
    Mobile_No: {
        type: String,
        unique: true,
        required: true,
        minlength: 5, 
        maxlength: 15,
    },
    ProfileCreatedBy:{
        type:ObjectId,
        required: true
    },
    DOB:{
        type: String
        },
    DOD:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    Gender:{
        type:String,
        required: true
    },
    Access:false,
    RandomToken:{
        type: String,
        unique: true,
        default:null
    },
    RandomTokenExpire:{
        type: Date,
        default:null
    },
    Host:{ 
        type: String,
        required: true
    },
    ProfileImage:{ 
        type: String,
    },
    BackgroundImage:{ 
        type: String,
    },
    Religion:{
        type: String,
    },
    POB:{
        type:String,
    },
    POD:{
        type:String,
    },
    About:{
        type:String,
    },
    Relations:[{
        Relation:String,
        Full_Name:String,
        Emails:String
    }],
    Educations:[{
        SchoolName:String,
        Course:String,
        From:String,
        To:String,
        StillStudying:
        {type:Boolean,
        default:false},
        City:String,
        Country:String,
        About:String
    }],
    Works:[{
        CompanyName:String,
        Designation:String,
        From:String,
        To:String,
        StillWorking:
        {type:Boolean,
        default:false},
        City:String,
        Country:String,
        About:String
    }],
    AccountSetting:{
        Enablefollow:{type:Boolean,default:false},
        SendNotification:{type:Boolean,default:false},
        TextMessageOnPhone:{type:Boolean,default:false},
        EnabbleTagging:{type:Boolean,default:false},
        EnabbleSoundNotification:{type:Boolean,default:true}   
    },
    Members:[{type: String}]
});

module.exports = mongoose.model('DeceasedPerson', DeceasedPerson);