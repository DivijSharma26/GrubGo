const express = require('express');
const mongo = require('./db');
const mongoDb = require('./db');
const app = express();
const port = 5000
mongoDb();

app.get('/',(req,res)=>{
    res.send('hi')
})

app.use(express.json())
app.use('/api',require("./routes/CreatUser"));

app.listen(port,() =>{
    console.log(`"ex" ${port}`);
    
})