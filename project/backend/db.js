const mongoose = require('mongoose');
const mongoDb = async () => {
    try {
        const URI = "mongodb+srv://divij:divij123@cluster0.wzfze.mongodb.net/GrubGo?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(URI);
        const db = mongoose.connection.db;
        const data = await db.collection("food-items").find({}).toArray();
        const foodcategory = await db.collection("food-category").find({}).toArray();
        if (data) {
            global.food_items = data;
            global.foodcategory = foodcategory;
            console.log(global.food_items, global.foodcategory);
        }

    } catch (error) {
        console.log(error);

    }
}
module.exports = mongoDb;
