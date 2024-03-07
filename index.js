import { connectDB } from "./src/db/db.connect.js";
import dotenv from 'dotenv'
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

dotenv.config({
    path: '.env'
})

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

app.use((req, res , next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

import userRouter from './src/routes/user.route.js';
import cartRouter from './src/routes/cart.route.js'
import prodRouter from './src/routes/product.route.js';
import existUserRouter from './src/routes/existingUser.route.js'
import userCartRouter from './src/routes/usercart.route.js'
import deleteCartRouter from './src/routes/deleteProd.route.js'
import bestdealsRouter from './src/routes/bestdeal.route.js'
import orderRouter from './src/routes/order.route.js'
import userViseOrderRouter from './src/routes/orderedprod.route.js'

app.get('/' ,(req, res)=>{
    res.status(200).json({"message": "success"})
})
app.use("/api/v1" , userRouter);
app.use("/api/v1" , cartRouter);
app.use("/api/v1" , prodRouter);
app.use("/api/v1" , existUserRouter);
app.use("/api/v1" , userCartRouter);
app.use("/api/v1" , deleteCartRouter)
app.use("/api/v1" , bestdealsRouter)
app.use("/api/v1" , orderRouter)
app.use("/api/v1" , userViseOrderRouter)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// import express from 'express'
// // import dotenv from 'dotenv'
// // dotenv.config({
// //     path: '.env'
// // })
// const app = express();

// app.get('/' , (req,res)=>[
//     res.send("hello from the bottom of my heart")
// ])

// app.listen(8000 , ()=>{
//     console.log('server running')
// })



