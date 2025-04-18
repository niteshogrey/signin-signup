const mongoose = require("mongoose")

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error to Connect DB", error);
    }
}

module.exports = connectDb