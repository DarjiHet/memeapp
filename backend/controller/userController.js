const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { funcToken } = require("../utils/token");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "all fildes are required",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "password must be at least 6 digit",
      });
    }
    const alreadyUser = await User.findOne({ email: email });
    if (alreadyUser) {
      return res.status(409).json({
        message: "you are already our user! login",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });
    //token
    funcToken(user._id, res);
    return res.status(200).json({
      message: "user created",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "all fildes are required",
      });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "email or password is incorrect",
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        message: "email or password is incorrect",
      });
    }

    funcToken(user._id, res);
    return res.status(200).json({
      message: "logedin",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message
    });
  }
};


exports.loadUser = async (req, res) => {
  try {
      const userId = req.user.id
      const user = await User.findById(userId)

      return res.status(200).json({
        message: 'user get',
        user
      })
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message
    });
  }
};




exports.logoutUser = async (req, res) => {

  try {
      res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      path: "/", // must match funcToken
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message
    });
  }
};
 