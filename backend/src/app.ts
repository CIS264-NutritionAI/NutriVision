// backend/src/app.ts
import express from "express";
import cors from "cors";
import llamaRouter from "./routes/llama";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/llama", llamaRouter);

export default app;
