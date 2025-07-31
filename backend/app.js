const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('../backend/routes/userRoute');
const imageRoute = require('../backend/routes/ImageRoute');
const adminRoute = require('../backend/routes/adminRoute');
const dbConnect = require('../backend/config/dbConnect');
const limiter = require('../backend/middleware/rateLimit')
const cookieParser = require('cookie-parser')
dotenv.config()
const app = express()


// db connection
dbConnect();
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cookieParser())
// app.use(limiter)

// the user
app.use("/api/v1",userRoute)
app.use("/api/v1",imageRoute)
app.use("/api/v1",adminRoute)


app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});