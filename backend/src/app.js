import express from 'express';
import dotenv from 'dotenv';
import {createServer} from 'node:http';
import {connectDB} from './db/db.js';
import connectToSocket from './controllers/SocketManager.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';


dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port",(process.env.PORT));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:'40kb' , extended:true}));



app.use("/api/v1/users",userRoutes);



const start = async () =>{
     await connectDB();
     server.listen(app.get("port"),()=>{
          console.log("Listening on port 8000");
     });
}

start();