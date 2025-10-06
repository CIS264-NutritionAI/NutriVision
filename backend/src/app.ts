import express from "express";
import ingredientRoutes from "./routes/ingredientRoutes.js";

const app = express();
app.use(express.json());

app.use("/ingredients", ingredientRoutes);

export default app;
