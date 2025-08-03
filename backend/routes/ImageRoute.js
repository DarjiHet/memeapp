const express = require('express')
const router = express.Router()
const {uploadImage, imagesByUser, deleteImageOfUser, searchImage, imageLike, downloadImage, getAllImages} = require("../controller/imageUploadController")
const authMiddleware = require("../middleware/authMiddleware");
const multer = require('../middleware/multer');
const limiter = require('../middleware/rateLimit')

router.route('/allimages').get(getAllImages)
router.route('/uploadimage').post(authMiddleware, multer, uploadImage)
router.route('/getimages').get(authMiddleware, imagesByUser)
router.route('/image/:id').delete(authMiddleware, deleteImageOfUser).post(authMiddleware, imageLike).get(authMiddleware, downloadImage)
router.route('/searchimage').post(authMiddleware, searchImage)

module.exports = router;