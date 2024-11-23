const mongoose = require('mongoose');
const mongoDb = async ()=>{
    const client = await mongoose.connect('mongodb://localhost:27017/grubgo');
    const data = await mongoose.connection.db.collection("food-items").find({}).toArray();
    console.log(data);
}
module.exports = mongoDb;
