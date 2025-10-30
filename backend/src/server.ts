import app from "./app.js";
import connectDB from './config/database.js';

const PORT = process.env.PORT || 3000;

connectDB(); // Connect to database

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
