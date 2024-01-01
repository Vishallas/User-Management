const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,  // Add this line
            // useFindAndModify: false,  // Add this line
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
