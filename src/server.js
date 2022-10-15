//const express = require('express');
import express from 'express';
//const mongoose = require('mongoose');
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()
//require('dotenv').config();

//const adminRoute = require( './routes/adminRoutes')
import adminRoutes from './routes/adminRoutes.js'

const app = express();
const port = process.env.PORT || 3020;

app.listen(port, () => console.log('server listening on port', port));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('docs'));
app.use('/api', adminRoutes)

//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to my API')
})

//mongoone DB connection 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to MongoDB Atlas'))
.catch((error) => console.log('error'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });