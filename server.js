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
    origin:'https://tuyetnhi1607-cms-website.herokuapp.com/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 
app.use(express.json());
// //mount the routes to
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/post', postRoute);

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is kgkdngk  at ${port}`);
})