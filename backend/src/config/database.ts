// Connects app to MongoDB (database)

import mongoose from "mongoose";
import dotenv from "dotenv"; 

// Load environment variables 
dotenv.config({ 
    path: "./.env", 
}); 

// Get MongoDB connection string from .env file 
const MONGOURL = process.env.MONGODB_URI; 

// Check if connection string works 
if (MONGOURL == undefined) {
    throw new Error("MongoDB connection string not found.");
}
 
// Connect to MongoDB database 
const connectDB = async() => { 
    try { 
        const conn = await mongoose.connect(MONGOURL); 
        console.log(`MongoDB connected successfully ${conn.connection.host}`); 
    } catch(error: any) { 
        console.error(`Error: ${error.message}`); 
        process.exit(1); 
    }
}; 

export default connectDB;

