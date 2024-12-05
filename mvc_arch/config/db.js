const mongoose = require("mongoose");

// Important links and URL.
const DB_URL = "mongodb://contact2theshreya:YFmOjdP5VarRnvXP@cluster0-shard-00-00.gv9b5.mongodb.net:27017,cluster0-shard-00-01.gv9b5.mongodb.net:27017,cluster0-shard-00-02.gv9b5.mongodb.net:27017/?ssl=true&replicaSet=atlas-6jodt5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const OPTIONS = {
    family: 4 // Use IPv4, skip trying IPv6
}

// Connect to DB.
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB.");
    } catch (err) {
        console.log("Error: ", err);
    }
}

module.exports = connectDB;