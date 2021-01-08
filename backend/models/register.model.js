const mongoose = require('mongoose');
var crypto = require('crypto'); 
var ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;
let Register = new Schema({
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
        required: true,
        minlength: 1, 
        maxlength: 15,
    },
    DOB:{
        type: String
    },
    Country:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true,
        minlength: 6
    },
    salt : String,
    Gender:{
        type:String
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
    GuideTour:false,
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
    ForgotPassword:{
        type: Boolean,
        default: false
    },
    Religion:{
        type: String,
    },
    POB:{
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
    Interests:[{type:String}],
    Hobbies:[{type:String}],
    Activity:[{type:String}],
    Membership:[{type:String}],
    AccountSetting:{
        Enablefollow:{type:Boolean,default:false},
        SendNotification:{type:Boolean,default:false},
        TextMessageOnPhone:{type:Boolean,default:false},
        EnabbleTagging:{type:Boolean,default:false},
        EnabbleSoundNotification:{type:Boolean,default:true}   
    },
    Friends:[{type: String}],
    isLoggedIn:{type: Boolean, default:false},
});


Register.methods.setPassword = function(password) { 
	
	this.salt = crypto.randomBytes(16).toString('hex'); 

	this.Password = crypto.pbkdf2Sync(password, this.salt, 
	1000, 64, `sha512`).toString(`hex`); 
}; 
 
Register.methods.validPassword = function(password) { 
	var Password = crypto.pbkdf2Sync(password, 
	this.salt, 1000, 64, `sha512`).toString(`hex`); 
	return this.Password === Password; 
}; 

module.exports = mongoose.model('Register', Register);