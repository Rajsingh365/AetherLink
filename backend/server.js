import path from 'path'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from './routes/messages.route.js'
import userRoutes from './routes/user.routes.js'

import {server, app} from './socket/socket.js'

const PORT = process.env.PORT || 5000;

// const __dirname = path.resolve();   //gives absolute path of the current directory

dotenv.config();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, '/frontend/dist')))

//any route that is not defined above will be redirected to the frontend,so we can run frontend routes on the server itself
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
// })

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`running on ${PORT}`);
});
