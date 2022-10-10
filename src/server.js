const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const adminRoute = require( './routes/adminRoutes')

const app = express();
const port = process.env.PORT || 3020;

app.listen(port, () => console.log('server listening on port', port));

//middleware
app.use(express.json());
app.use('/api', adminRoute)

//ROUTES
app.get('/', (req,res) => {
    res.send('Welcome to my API')
})

//mongoone DB connection 
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to MongoDB Atlas'))
.catch((error) => console.log('error'))