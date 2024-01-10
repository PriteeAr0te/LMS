const jwt = require('jsonwebtoken');
const JWT_SECRET = "youareverry$pretty";

const fetchadmin = (req, res, next) =>{
//Get the admin data from JWT token and add it to req object
    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({error: "Please Authenticate Using Valid Token"})
    }
   try{
    const data = jwt.verify(token, JWT_SECRET)

    //Get data into req.admin
    req.admin = data.admin;
    next();
   }
   catch(error){
    res.status(401).json({error: "Please Authenticate Using Valid Token"})

   }
}

module.exports = fetchadmin;