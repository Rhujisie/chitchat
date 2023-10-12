const User = require('../models/User')

const getProfile = async(req, res)=>{
    res.json('get profile')
}

const updateProfile = async(req, res)=>{
    res.json('update profile')
}

module.exports = {getProfile, updateProfile}