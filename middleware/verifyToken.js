const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    console.log("verifyToken", req.header('Authorization'))
    const Authorization = req.header('Authorization');

    if(!Authorization){
        res.status(400).json({
            status: 'ghfhfhf',
        })
    }else{
        const token = Authorization.replace('Bearer ', '')
        const {userId} = jwt.verify(token, process.env.APP_SECRET)
        req.user = {userId}
        console.log(req.user);
        next()
    }
}
