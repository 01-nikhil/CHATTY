import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.router.js';
import messageRoutes from './routes/message.router.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app,server } from './lib/socket.js';
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));  // This sets the size limit for JSON bodies
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // This sets the size limit for URL-encoded bodies

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});
