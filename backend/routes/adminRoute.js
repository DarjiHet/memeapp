const express = require('express')
const router = express.Router()
const { getAllUser, deletUser, deletImage} = require('../controller/adminController')
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware")

router.route('/admin/getuser').get(authMiddleware, roleMiddleware, getAllUser);
router.route('/admin/delete/user/:id').delete(authMiddleware, roleMiddleware, deletUser);
router.route('/admin/delete/image/:id').delete(authMiddleware, roleMiddleware, deletImage);



module.exports = router