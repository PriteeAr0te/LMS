const connectToMongo = require('./db');
const express = require('express')
const app = express();
const port = 5000;

connectToMongo();

//use this middleware if you are using req.body
app.use(express.json())

// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/course', require('./routes/course'))


app.listen(port, ()=>{
    console.log(`App Listening on port: ${port}`)
})