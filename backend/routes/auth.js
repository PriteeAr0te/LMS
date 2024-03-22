const express = require('express');
const Admin = require('../models/Admin');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
router.use(express.json())
const fetchadmin = require('../middleware/fetchadmin')

const JWT_SECRET = "youareverry$pretty";

//Route1: Create a admin using Post "/api/auth/createadmin" No Login Required
router.post('/createadmin',[
   body('name','Enter a valid name').isLength({min:2}),
   body('email', 'Enter a valid mail').isEmail(),
   body('password', 'Password must be greater than 5 characters').isLength({min:6}),
   body('phone', 'Enter Valid Mobile No.').isLength({max:10})
] , async(req, res)=>{
   let success = false;
   try{
      //Check of there are any errors in received data
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // check if the admin with same email exist or not 
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
       //Prepare data about the admin to create a token
       const data = {
         admin: {
            id : admin.id,
         }
       }
       //Genetate JWT using admin's data and a secret key
       const authtoken = jwt.sign(data, JWT_SECRET);
       //Sending JWT token back to the user
       success = true;
       res.json({success, "Authtoken": authtoken})

   }
   catch(error){
      console.error("Error Occured in User Creation", error)
   }
})


//Route 2: Authenticate a admin using Post "/api/auth/login" No Login Required
router.post('/login',[
   body('email', 'Enter a valid mail').isEmail(),
   body('password', 'Password must be greater than 5 characters').exists()
] , async(req, res)=>{

   // Check if there are any errors in the received data.
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   const {email, password} = req.body;
   
   try{
      let admin = await Admin.findOne({email});
      if(!admin){
         res.status(400).json({error: "Enter Valid Credentials."})
      }
      const comparePassword = await bcrypt.compare(password, admin.password)
      if(!comparePassword){
         res.status(400).json({error: "Invalid Credentials"})
      }
      //Prepare data about the admin to create a token
      const data = {
         admin: {
            id: admin.id,
         }
      }
      //Genetate JWT using admin's data and a secret key
      const authtoken = jwt.sign(data, JWT_SECRET);
      //Sending JWT token back to the user
      let success = true;
      res.json({success, authtoken})
   }
   catch(error){
      return res.status(400).json({error: "Error Occured in Login"})
   }
})



//Route 3: Get admin data using Post "/api/auth/getadmin" Login Required
router.get('/getadmin', fetchadmin, async(req, res)=>{
try{
   let adminId = req.admin.id;
   let admin = await Admin.findById(adminId).select('-password');
   res.send(admin)
}
catch(err){
   console.log(err)
   return res.status(400).json({error: "Internal Server Error"});
}
})

module.exports = router;