const express=require('express');
const router=express.Router();
const {signup,signin,userData,userDataUpdate,addLocation}=require('../controllers/auth')
const {check}=require('express-validator');

router.post('/signup',[
    check('emailId')
     .isEmail()
     .withMessage("It is not an Email")
     .isLength({min:4}),
    check('password')
     .isLength({min:6})
     .withMessage("Minium Length of password is 6!"),
    check('firstName')
     .isLength({min:3}).
     withMessage('First Name is too short!')
     .isLength({max:32})
     .withMessage('first name is too long!')
     .not()
     .contains(' '),
    check('phoneNumber')
     .isMobilePhone()
],signup);

router.post('/signin',[
    check('emailId')
     .isEmail()
     .withMessage("It is not an Email").isLength({min:4}),
    check('password')
     .isLength({min:6})
     .withMessage("Minium Length of password is 6!"),
],signin);

router.get('/userData/:_id',(req,res,next)=>{
    next();
},userData);

router.post('location/',addLocation);


router.patch('/userData/:userId',userDataUpdate);
module.exports =router