const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({userId: user._id}, process.env.APP_SECRET);
        res.status(200).json({
            isLogined: true,
            status: 'success',
            data: {token, userName: user.name }
        })
    } catch (error) {
        res.json(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.json()
        }else{
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({userId: user.id}, process.env.APP_SECRET);
                res.status(200).json({
                    isLogined: true,
                    status: 'success',
                    data: {
                        token, userName: user.name
                    }
                })
            }else{
                ////////////////////////////////
            }
        }

    } catch (error) {
        res.json(error);
    }
}

exports.logout = async (req, res, next) => {
    try {
        res.status(200).json({
            isLogined: false,
            data: {
                token: "", userName: ""
            }
          
        })
    } catch (error) {
        res.json(error);
    }
}
