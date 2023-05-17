import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from "path";
import {fileURLToPath} from "url";
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname+'/.env' });
mongoose.set('strictQuery', true);

function handleError(e: any) {
    console.log(`${e} didn't connect`)
}

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO as string);
        console.log("connected to mongoDB")
    } catch (error) {
        handleError(error);
    }
}

app.use(cors({origin: 'http://127.0.0.1:5173', credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, () => {
    connect();
    console.log('server is running')
})