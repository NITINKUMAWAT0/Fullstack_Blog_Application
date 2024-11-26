import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Router } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dbConnection from "./dbConfig/index.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

dbConnection();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({limit:"20mb"}));
app.use(express.urlencoded({extended:true}));

app.use(morgan("dev"));

// app.use(Router);
// app.use(errorMiddleware());

app.listen(PORT, ()=>{
    console.log("Server running on port : " + PORT);
    
});