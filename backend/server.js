import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
//const express =require("express");
//const dotenv=require("dotenv");
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
const app=express();
const PORT =process.env.PORT ||5000;
dotenv.config();
app.use(cookieParser());
app.use(express.json());
//app.get("/",(req,res)=>{
  //  res.send("hello world")
//});
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

//app.get("/api/auth/signup",(req,res)=>{console.log("signup route")})
//app.get("/api/auth/login",(req,res)=>{console.log("login route")})
//app.get("/api/auth/logout",(req,res)=>{console.log("logout route")})
app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`serverrunning on ${PORT}`)})


