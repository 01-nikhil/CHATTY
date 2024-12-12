import express from 'express'
import dotenv from 'dotenv';
import authRoutes from './routes/auth.router.js'
import messageRoutes from './routes/message.router.js'
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const app=express();
const PORT=process.env.PORT||5001;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.listen(PORT, ()=>{
    console.log("Server is running on PORT:" +PORT);
    connectDB();
});