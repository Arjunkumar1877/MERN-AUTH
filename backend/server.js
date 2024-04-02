import express, { urlencoded } from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;
import userRoute from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { connectDb } from './config/db.js';

connectDb();
app.use(express.json());
app.use(urlencoded({extended: true}));


app.use('/api/user', userRoute)
// console.log(process.env.MONGO_URI)

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED ON PORT : - ${PORT}`)
})
