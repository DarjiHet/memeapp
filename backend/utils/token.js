const jwt = require("jsonwebtoken");

exports.funcToken = (id, res) => {
  try {
    const token = jwt.sign(
      {
        id: id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // token expiry
    );
    res.cookie("token", token, {
      httpOnly: true, // can't be accessed by JS
      // secure: process.env.NODE_ENV === "production", // true in production
      secure: true,
      sameSite: "None", // needed for cross-site cookies
      // domain: ".onrender.com", // allows subdomains
      path: "/",
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });
  } catch (error) {
    return res.json({
      message: "error creating the token",
    });
  }
};
