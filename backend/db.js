const mongoose = require('mongoose');
const mongoDb = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/grubgo');
        const data = await mongoose.connection.db.collection("food-items").find({}).toArray();
        const foodcategory = await mongoose.connection.db.collection("food-category").find({}).toArray();        if(data)
        {
            global.food_items = data;
            global.foodcategory = foodcategory;
            console.log(global.food_items,global.foodcategory);
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
        
}
module.exports = mongoDb;
