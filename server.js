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
app.use(cors());
app.use(express.json());
// //mount the routes to
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/post', postRoute);

// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         status: 'success',
//         data: {
//             ports: []
//         }
//     })
// })

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is kgkdngk  at ${port}`);
})