import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/blogs.js';
const app = express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/blogs', blogRoutes)

const conStr = process.env.CONNECTION_STR

const PORT = process.env.PORT || 8000

mongoose.connect(conStr)
        .then(() => console.log("Connected to Database"))
        .catch((err)=> console.log(err.message))

app.listen(PORT, ()=> console.log(`Connected on port ${PORT}`))
