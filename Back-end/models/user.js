const mongoose=require("mongoose");
const crypto=require("crypto");
const { v4: uuidv4 } = require('uuid');

var userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
            maxlength:32,
        },
        lastName:{
            type:String,
            trim:true,
            maxlength:32,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            maxlength:32,
        },
        emailId:{
            type:String,
            trim:true,
            unique:true,
            required:true,
        },
        phoneNumber:{
            type:String,
            trim:true,
            unique:true,
            required:true,
        },
        risk:{
            type:Number,
            default:0,
        },
        encrypt_password:{
            type:String,
            required:true,
        },
        salt:{
            type:String,
        },
        role:{
            type:Number,
            default:0,
        },
    },
    {timestamps:true}
);

// Setting up fullName & encrypassword
userSchema.virtual('password')
    .set(function(password){
        this._password=password;
        this.salt=uuidv4();
        this.encrypt_password=this.securePassword(password);
        this.fullName=this.firstName+' '+this.lastName;
    })
    .get(function(){
        return this._password;
    });


//Methods
userSchema.methods={
    authenticate:function(plainPassword){
        return this.securePassword(plainPassword)===this.encrypt_password;
    },
    securePassword:function(plainPassword){
        if(!plainPassword) return "";
        try {
            return crypto.createHmac('sha256',this.salt)
            .update(plainPassword)
            .digest('hex');
        } catch (err) {
            return "";
        }
    }
};

//Exporting
module.exports=mongoose.model('User',userSchema);