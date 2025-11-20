import app from "./app.js";
import connectDB from './config/database.js';

const PORT = process.env.PORT || 3000;

// Function to start the server with the database connected
const startServer = async () => { 
  await connectDB(); // Wait for database to connect  

  // Start the server after the database has connected successfully
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer(); 
