import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

export const connectDB = async ()=>{
    const MONGODB_URI= "mongodb+srv://atul10singh112002:%24setPasswordMaapapa%4012@cluster0.74dwyf3.mongodb.net"
    try {
        await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log("mongoDB connected!!!!")
    } catch (error) {
        console.log("mongoDB connection error: " , error.message);
        throw error
    }
}