const Image = require("../model/imageModel");
const cloudinary = require('../config/cloudinary');

exports.uploadImage = async (req, res) => {
  try {
    const user = req.user.id;

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: 'name is required',
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: 'No file provided',
      });
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          folder: 'meme_image',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(req.file.buffer); // `req.file.buffer` from multer's memoryStorage
    });

    const image = await Image.create({
      public_id: result.public_id,
      url: result.secure_url,
      name,
      uploadedBy: user,
    });

    res.status(200).json({
      message: "image uploaded",
      image,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

exports.imagesByUser = async (req, res) => {
  try {
    const user = req.user.id;

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const images = await Image.find({ uploadedBy: user });
    return res.status(200).json({
      message: "retrived images successfully",
      images,
      count: images.length,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

exports.deleteImageOfUser = async (req, res) => {
  try {
    const imageId = req.params.id;

    if (!imageId) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({
        message: "Image not found in database",
      });
    }

    await cloudinary.uploader.destroy(image.public_id);

    await Image.findByIdAndDelete(imageId);
    return res.status(200).json({
      message: "image deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};


exports.searchImage = async (req, res) => {
  try {
    const {keyword} = req.body;
    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({
        message: "please enter keyword",
      });
    }

    const searchRegex = new RegExp(keyword, 'i');


    const images = await Image.find({ name: { $regex: searchRegex}})
    return res.status(200).json({
      message: "image retrived successfully",
      images,
      count: images.length,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};