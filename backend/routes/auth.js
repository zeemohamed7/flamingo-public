const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/auth')
const isLoggedIn = require('../lib/isLoggedIn')




router.get('/signup', authCtrl.auth_signup_get)
router.get('/signin', authCtrl.auth_signin_get)

router.post('/auth/signup', authCtrl.auth_signup_post)
router.post('/signin', authCtrl.auth_signin_post)

router.get('/logout', isLoggedIn, authCtrl.auth_logout_get)
module.exports = router