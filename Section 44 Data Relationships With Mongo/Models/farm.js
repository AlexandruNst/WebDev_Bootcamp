const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => console.log("Mongo connection open"))
    .catch(err => console.log(err))

// ONE TO MANY
// Populate the reference with a list of id's
// "Store reference on parent"

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
});

const Product = mongoose.model("Product", productSchema);

// Product.insertMany([
//     {
//         name: "Melon",
//         price: 4.99,
//         season: "Summer"
//     },
//     {
//         name: "Asparagus",
//         price: 3.99,
//         season: "Spring"
//     }
// ])

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
})

const Farm = mongoose.model("Farm", farmSchema);

const makeFarm = async () => {
    const farm = new Farm({
        name: "Full Belly Farms",
        city: "Guinda, CA"
    })
    const melon = await Product.findOne({ name: "Melon" });
    farm.products.push(melon);
    const res = await farm.save();
    console.log(res);
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Full Belly Farms" })
    const asparagus = await Product.findOne({ name: "Asparagus" });
    farm.products.push(asparagus);
    await farm.save();
}

// makeFarm();
// addProduct();

Farm.findOne({ name: "Full Belly Farms" })
    .populate("products") // this refers to the products field, NOT the model
    .then(farm => console.log(farm))