const mongoose = require("mongoose")

const connectDb = async() =>{
    try {
        await mongoose.connect("mongodb+srv://ecommerce:ecommerce@ecommerce.6rge1.mongodb.net/")
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error to Connect DB", error);
    }
}

module.exports = connectDb