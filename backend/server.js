//server.js = entry point to our server
const path = require('path')
const express = require('express');
const colors = require('colors');
const { rmSync } = require('fs');
const { get } = require('http');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorHandler');
const res = require('express/lib/response');
const cors = require('cors');
connectDB()
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

//serve frontend
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}else{
  app.get('/', (req, res) => res.send('Please set to production'))
}
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`.green))