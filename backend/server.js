const express = require('express');
// const mongo = require('./db');
const mongoDb = require('./db.js');
const app = express();
const port = 5000
mongoDb();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use(express.json())
app.use('/api',require("./routes/CreatUser"));
app.use('/api',require("./routes/DisplayData"));

app.listen(port,() =>{
    console.log(`"ex" ${port}`);
    
})