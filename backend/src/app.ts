import express from "express";
import cors from "cors"; 
import ingredientRoutes from "./routes/ingredientRoutes.js";
import scanRoutes from "./routes/scanRoutes.js"; 

const app = express();

app.use(cors()) // Allow frontend to talk to backend 
app.use(express.json());

app.use("/api/ingredients", ingredientRoutes);
app.use("/api/scans", scanRoutes);

export default app;
