const express = require('express')
const router = express.Router()
const {createUser, loginUser, logoutUser} = require("../controller/userController")

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);



module.exports = router