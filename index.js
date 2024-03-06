import { connectDB } from "./src/db/db.connect.js";
import dotenv from 'dotenv'
import { app } from "./src/app.js";


dotenv.config({
    path: '\.env'
})

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

// export default app;

