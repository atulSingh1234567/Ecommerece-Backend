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
import prodRouter from './routes/product.route.js';
import existUserRouter from './routes/existingUser.route.js'
import userCartRouter from './routes/usercart.route.js'
import deleteCartRouter from './routes/deleteProd.route.js'
app.use("/api/v1" , userRouter);
app.use("/api/v1" , cartRouter);
app.use("/api/v1" , prodRouter);
app.use("/api/v1" , existUserRouter);
app.use("/api/v1" , userCartRouter);
app.use("/api/v1" , deleteCartRouter)

export {app}