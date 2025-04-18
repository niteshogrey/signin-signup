const express = require('express');
const connectDb = require('./src/config/dbConfig');
const user = require('./src/routes/authRoutes');
const app = express()

app.use(express.json());

app.use("/api/v1/user", user)

const port = 1000
app.listen(port, async()=>{
    await connectDb()
    console.log(`Server running on ${port}`);
})