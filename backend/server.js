const express = require('express');
const mongo = require('./db');
const mongoDb = require('./db');
const app = express();
const port = 8080
mongoDb();
app.use()
app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(port,() =>{
    console.log(`"ex" ${port}`);
    
})