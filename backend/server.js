const express = require('express');
// const mongo = require('./db');
const mongoDb = require('./db');
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


app.get('/',(req,res)=>{
    res.send('HELLOoooo')
})

app.use(express.json())
app.use('/api',require("./routes/CreatUser"));

app.listen(port,() =>{
    console.log(`"ex" ${port}`);
    
})