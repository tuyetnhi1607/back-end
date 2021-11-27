const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI, {
            //tranh in thong bao warning
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("DB connection successfully");
    }catch(err){
        console.log(err);
        //ngat ket noi
        process.exit(1)
    }
}

module.exports = {connectDB}