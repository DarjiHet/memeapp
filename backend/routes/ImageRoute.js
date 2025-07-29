const express = require('express')
const router = express.Router()
const {uploadImage, imagesByUser, deleteImageOfUser, searchImage} = require("../controller/imageUploadController")
const authMiddleware = require("../middleware/authMiddleware");
const multer = require('../middleware/multer');

router.route('/uploadimage').post(authMiddleware, multer, uploadImage)
router.route('/getimages').get(authMiddleware, imagesByUser)
router.route('/deleteimage/:id').delete(authMiddleware, deleteImageOfUser)
router.route('/searchimage').get(authMiddleware, searchImage)

module.exports = router;