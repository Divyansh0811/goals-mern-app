//server.js = entry point to our server
const express = require('express');
const { rmSync } = require('fs');
const { get } = require('http');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorHandler')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))