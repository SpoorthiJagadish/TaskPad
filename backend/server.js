import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./dbConn/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import noteRoutes from "./routes/note.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
//authentication routes
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/taskpad", noteRoutes);

//app.get("/", (req, res) => {
// root route http://localhost:5000/
// res.send("Hello World");
//});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
