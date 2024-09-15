import express from "express";
import mongoose from "mongoose";
import {PORT, mongoDBURL} from './config.js';
import postRoute from './routes/postRoute.js';
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to juit connect backend');
})

//middleware
app.use('/posts',postRoute)

//connecting the database
mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to the database');
    //server runs only if database connection successful
    app.listen(PORT,()=>{
        console.log(`App is listening on port : ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});
