const express = require("express");
const router = express.Router()

const {regiterUser, loginUser, getCurrentUser} = require('../controllers/userController.js')


router.post('/', regiterUser)
router.post('/login', loginUser)
router.get('/current', getCurrentUser)





module.exports = router