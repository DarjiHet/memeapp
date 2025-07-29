const User = require("../model/userModel");
const Image = require("../model/imageModel");
const cloudinary = require("../config/cloudinary");

exports.getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();

    if (allUser.length === 0) {
      return res.status(404).json({
        message: "There are no users right now",
      });
    }

    res.status(200).json({
      message: "Success",
      allUser,
      count: allUser.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

exports.deletUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

exports.deletImage = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Image.findById(id);

    // we will add cloudinary destroy leter
    if (!image) {
      return res.status(404).json({
        message: "Iamge id is required",
      });
    }

    await cloudinary.uploader.destroy(image.public_id);

    await Image.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Image deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
