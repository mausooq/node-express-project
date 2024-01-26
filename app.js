const express = require('express')
const dotenv =require("dotenv").config();
const errorHandler =require('./middleware/errorHandeler');
const dbConnect = require('./config/dbConnect')

const app = express();
// bodyParser
app.use(express.json());
// pages
app.use('/api/contact',require('./routes/pages'))
// middleware
app.use(errorHandler);


port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
dbConnect();