require('dotenv').config();


const express=require('express');
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.json());


const PORT=process.PORT.env || 5000


app.listen(PORT,()=>{
    console.log(`server is runnng on ${PORT}`)
})