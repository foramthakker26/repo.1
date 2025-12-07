import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // MUST be at the top

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI); // Debug line
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;