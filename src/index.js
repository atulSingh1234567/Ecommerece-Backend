import { connectDB } from "./db/db.connect.js";
import dotenv from 'dotenv'

dotenv.config({
    path: '\.env'
})

connectDB()
