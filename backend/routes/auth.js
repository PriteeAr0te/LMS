const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

//Create a user using Post "/api/auth/"
router.post('/', async(req, res)=>{
   try{
      console.log(req.body)

   const admin = Admin(req.body);
   await admin.save();

   res.send(req.body);
   }
   catch(error){
      console.error("Error Occured in User Creation", error)
   }
})

module.exports = router;