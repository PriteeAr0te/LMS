const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//using express validator
const { body, validationResult } = require('express-validator');

const JWT_SECRET = 'YourCourseFinder';

//Create a user using Post "/api/auth/createadmin" No Login Required
router.post('/createadmin',[
   body('name','Enter a valid name').isLength({min:2}),
   body('email', 'Enter a valid mail').isEmail(),
   body('password', 'Password must be greater than 5 characters').isLength({min:6}),
   body('phone', 'Enter Valid Mobile No.').isLength({max:10})
] , async(req, res)=>{
   try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // check if the asmin with same email exist or not 
      let admin = await Admin.findOne({email: req.body.email})
      if(admin){
         return res.status(400).json({error:"Email Already Exist."})
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)

      //Create a Admin
      admin = await Admin.create({
         name: req.body.name,
         email: req.body.email,
         password: secPass,
         phone: req.body.phone,
         profession: req.body.profession
       })
       //Creating Authtoken 
       const data = {
         admin: {
            id : admin.id,
         }
       }
       const authtoken = jwt.sign(data, JWT_SECRET);
       res.json({"Authtoken": authtoken})

   }
   catch(error){
      console.error("Error Occured in User Creation", error)
   }
})

module.exports = router;