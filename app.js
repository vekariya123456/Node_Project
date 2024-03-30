const express = require('express');
const app = express();
const port = 2024;
require('dotenv').config();
const mongoose = require('mongoose');

app.use(express.json());

const adminsRoutes = require('./src/Routes/admin/index.routes')
app.use('/api/admin', adminsRoutes);

const userRoutes = require('./src/Routes/user/index.routes')
app.use('/api/user',userRoutes);

app.listen(port, async() => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>console.log('DB is Connected'))
    .catch(err => console.log(err.message));
    console.log(`Server Start at http://localhost:${port}`);  
})