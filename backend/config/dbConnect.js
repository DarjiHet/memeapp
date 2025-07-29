const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log('db connected')
    }).catch(() => {
        console.log('there is problem in db connection')
    })
}

module.exports = dbConnect;