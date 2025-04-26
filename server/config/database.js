// config/database.js
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
    const dbURI = process.env.MONGO_URI;

    if (!dbURI) {
        console.error("DATABASE_URL is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(dbURI)
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
        process.exit(1);
    });
};

module.exports = connect;
