import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

// routes
import userRouter from './routes/user.route.js';
import cartRouter from './routes/cart.route.js'
 
app.use("/api/v1" , userRouter);
app.use("api/v1" , cartRouter)

export {app}