const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.json({
                message: 'invalid access'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded;

        return next()
    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error
        })
    }
}


module.exports = auth;
