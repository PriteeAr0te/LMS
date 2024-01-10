const connectToMongo = require('./db');
const express = require('express')
const app = express();
const port = 3000;

connectToMongo();
app.use(express.json())
// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/course', require('./routes/course'))


app.listen(port, ()=>{
    console.log(`App Listening on port: ${port}`)
})