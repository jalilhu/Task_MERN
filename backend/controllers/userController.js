const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const regiterUser = asyncHandler(async (req, res) => {
    res.json({message: "user is registred"})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "user is logged in"})
})

const getCurrentUser = asyncHandler(async (req, res)=>{
    res.json({message: "current user is "})
})



module.exports = { regiterUser, loginUser, getCurrentUser}