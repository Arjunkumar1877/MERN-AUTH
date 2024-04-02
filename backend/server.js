import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;
import userRoute from './routes/userRoutes.js'



app.use('/api/user', userRoute)

app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED ON PORT : - ${PORT}`)
})