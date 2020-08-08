const User=require("../models/user")
const {validationResult}=require('express-validator');
var jwt =require('jsonwebtoken');
var expressJwt=require('express-jwt');
const { request } = require("express");

exports.signup=async (req,res)=>{
    const user =new User(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        param: errors.array()[0].param,          
        errors: errors.array()[0].msg 
        });
    }

    await user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"It failed",
                value:err
            });
        }
        res.json(user._id);
        console.log(user);
        console.log('\n');  
        console.log(user.fullName);
    });
};

exports.signin=(req,res)=>{
    
    const {emailId,password}=req.body

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        param: errors.array()[0].param,          
        errors: errors.array()[0].msg 
        });
    }

    User.findOne({emailId},
        (err,user)=>{
            if(err || !user){
                return res.status(400).json({
                    error:"USER do not exist!"
                })
            }
            if(!user.authenticate(password)){
                return res.status(401).json({
                    error:"Email & password do not match!"
                })
            }
            //Token Creation
            const token=jwt.sign({_id:user._id},process.env.KILL);
            // Put token in Cookie
            res.cookie("token",token,{expire:new Date()+99})       
            // Res to FRONT_END
            const {_id}  =user;
            return res.json({token,_id});
    });
}; 

exports.userData=async (req,res)=>{
    const _id=req.params._id;
    console.log(_id);
    await User.findOne({_id},
        (err,user)=>{
            if(err || !user){
                return res.status(400).json({
                    error:"USER do not exist!"
                })
            }
            const {emailId,firstName,lastName,fullName,risk,phoneNumber,}=user;
            return res.json({emailId,firstName,lastName,fullName,risk,phoneNumber});
    });
};

exports.userDataUpdate=async(req,res)=>{
    const _id=req.params._id;
    User.update()
};