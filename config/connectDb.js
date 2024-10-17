const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then((data) => {
            console.log(`Mongodb is connected on port ${data.connection.port}`);
        })
        .catch(err => console.log("Database connection error: ", err));
};

module.exports = connectDb;
