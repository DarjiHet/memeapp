const express = require('express')
const router = express.Router()
const auth =  require('../middleware/authMiddleware');
const {createUser, loginUser, logoutUser, loadUser} = require("../controller/userController")

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/getuser').get(auth, loadUser)



module.exports = router