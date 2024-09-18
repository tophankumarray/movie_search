import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";





// database
databaseConnection();

dotenv.config({
    path:".env"
})
const app = express();






// middlewares
app.use(express.urlencoded({urlencoded:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));




// app.get("/",(req,res)=>{
//     res.status(200).json({
//         message:"Hello i am coming from backend",
//         success:true
//     })
// })



// api
app.use("/api/v1/user", userRoute);  // http://localhost:5700/api/v1/user/register






const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`);
})