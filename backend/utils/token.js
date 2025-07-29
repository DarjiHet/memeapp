const jwt = require("jsonwebtoken");

exports.funcToken = (id, res) => {

    try {
        const token = jwt.sign(
          {
            id: id,
          },
          process.env.JWT_SECRET
        );
        res.cookie("token", token, {
          maxAge: 60 * 60 * 24 * 7 * 1000,
        });
    } catch (error) {
        return res.json({
            message: 'error creating the token'
        })
    }
}