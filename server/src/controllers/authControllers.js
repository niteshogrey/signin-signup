const User = require("../models/userModel")

const registerUser = async(req, res) =>{
    const {firstName, lastName, mobile, email, password} = req.body
    if (!firstName || !lastName || !mobile || !email || !password) {
      return  res.status(400).json({
            success: false,
            message: "All fields are required"
        })        
    }
    try {

        const userExist = await User.findOne({ $or : [{email}, {mobile}]})

        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }

        const newUser = new User({
            firstName,
            lastName,
            mobile,
            email,
            password 
        })

        await newUser.save()
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
          })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
          });     
    }
}

module.exports = registerUser