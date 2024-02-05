import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorHandler from './middlewares/errorHandler.js';
import userRoute from './routes/userRoutes.js';
import residencyRoute from './routes/residencyRoutes.js'



const app = express();

const port = process.env.PORT || 7000;
const db = process.env.DB_URI;



app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute)
// app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port: ${port}.`));
