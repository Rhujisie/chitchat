const express = require('express')
const router = express.Router()
const {getProfile, updateProfile} = require('../controller/Profile')

router.get('/', getProfile)
router.patch('/update', updateProfile)

module.exports = router