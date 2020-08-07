require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors =require('cors');
const authRoutes=require('./routes/auth')

// DataBase Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connected`)
}).catch((err)=>{
    console.log(err)
});

// Midlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api",authRoutes);

//Port
const port=process.env.PORT ||8000;


//Starting a server
app.listen(port,()=>{
    console.log(`Hi Dudes at ${port}`)
});