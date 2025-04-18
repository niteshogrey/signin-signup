const express = require("express")
const registerUser = require("../controllers/authControllers")

const user = express.Router()

user.post("/register", registerUser)

module.exports = user