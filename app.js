const express = require('express')
const dotenv =require("dotenv").config();


const app = express();

app.use('/api/contact',require('./routes/pages'))
port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})