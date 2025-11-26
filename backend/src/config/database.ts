
import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config({ 
    path: "./.env", 
}); 

const MONGOURL = process.env.MONGODB_URI; 

if (MONGOURL == undefined) {
    throw new Error("MongoDB connection string not found.");
}
 
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

