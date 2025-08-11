const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('../backend/routes/userRoute');
const imageRoute = require('../backend/routes/ImageRoute');
const adminRoute = require('../backend/routes/adminRoute');
const dbConnect = require('../backend/config/dbConnect');
const limiter = require('../backend/middleware/rateLimit')
const cookieParser = require('cookie-parser')
const cors = require('cors');
dotenv.config()
const app = express()


app.use(cors({
  // origin: 'http://localhost:5000', // allow frontend
  origin: 'https://pixee.netlify.app/',
  credentials: true,               // allow cookies/sessions
}));


app.set("trust proxy", 1);

// db connection
dbConnect();
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cookieParser())
app.use(limiter)

// the user
app.use("/api/v1",userRoute)
app.use("/api/v1",imageRoute)
app.use("/api/v1",adminRoute)


app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});