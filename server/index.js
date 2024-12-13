import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dbConnection from "./dbConfig/index.js";
import authRoutes from "./routes/authRoutes.js"; // Add `.js`

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

// Database connection
dbConnection();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

// Server start
app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});
