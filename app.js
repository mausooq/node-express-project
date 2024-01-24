const express = require('express')
const dotenv =require("dotenv").config();


const app = express();

port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})