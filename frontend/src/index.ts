import mongoose from "mongoose";

mongoose.connect{
    mongodb+srv://<username>:<password>@nutrivision.9fjdc8n.mongodb.net/
} .then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error(err));