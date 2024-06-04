// import  express  from "express";
// import cors from 'cors';
// import apiRoutes from './routes/routes.js'
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/Csg',apiRoutes);

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/');
});
