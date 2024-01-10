const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();
//useing express validator
const { body, validationResult } = require('express-validator');

//Create a user using Post "/api/auth/"
router.post('/',[
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
      Admin.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         phone: req.body.phone,
         profession: req.body.profession
       }).then(admin => res.json(admin))
       .catch(error => { console.log(error);
         res.json({error:"Email Already Exist."});
      });

   }
   catch(error){
      console.error("Error Occured in User Creation", error)
   }
})

module.exports = router;