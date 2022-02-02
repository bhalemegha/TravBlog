import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const conStr = process.env.CONNECTION_STR

const PORT = process.env.PORT || 5000

mongoose.connect(conStr)
        .then(()=> app.listen(PORT), ()=> console.log(`server running on port: ${PORT}`))
        .catch((err)=> console.log(err.message))

