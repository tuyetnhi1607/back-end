const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {type: String, unique: true, trim: true, required: [true, 'Name must be required']},
    email: {type: String, unique: true, trim: true, required: [true, "Email must be required"]},
    password: {type: String, trim: true, required: [true, "Password must be required"], minLength: [6, 'Password must be at least 6 characters']}
}, {timestamps: true})

userSchema.pre('save', function(next){
    let user = this;
    bcryptjs.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err);
        }else{
            user.password = hash;
            next()
        }
    })
})
const User = mongoose.model('User', userSchema);

module.exports = User;