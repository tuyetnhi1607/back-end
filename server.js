//dotenv 
require('dotenv').config();
//connect DB
const {connectDB} = require('./configs/db')

connectDB();
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 
app.use(express.json());
// //mount the routes to
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/post', postRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is kgkdngk ${process.env.PORT}`);
})