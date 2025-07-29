const User = require('../model/userModel')

const roleMiddleware = async (req, res, next) => {

    if(!req.user || !req.user.id){
        return res.status(401).json({
        message: "Unauthorized. User not found.",
      });
    }

    const {id} = req.user 
    if(!id){
        return res.json({
            message: "user not found"
        })
    }

    const user = await User.findById(id);

    if(user.role != 'admin'){
        return res.json({
            message: 'invalid access'
        })
    }

    return next()
}

module.exports = roleMiddleware;