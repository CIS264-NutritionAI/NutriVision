// backend/src/server.ts
import app from "./app";

const PORT = 3000;

const startServer = async () => { 
  //await connectDB();  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
