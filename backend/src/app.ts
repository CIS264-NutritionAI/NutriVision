// backend/src/app.ts
import express from "express";
import cors from "cors";
import llamaRouter from "./routes/llama";

const app = express();

<<<<<<< HEAD
app.use(cors());
app.use(express.json());
=======
app.use(cors()); 
app.use(express.json({ limit: '50mb' }));
>>>>>>> main

app.use("/api/llama", llamaRouter);

export default app;
