import app from "./app.js";
import connectDB from './config/database.js';
import llamaRoute from "./routes/llama";

app.use("/api/llama", llamaRoute);


const PORT = process.env.PORT || 3000;

const startServer = async () => { 
  await connectDB(); 

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer(); 
