const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log("CONNECTION ESTABLISHED"))
    .catch(err => console.log(err))

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String], // will attempt to cast non-Strings into Strings
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Mountain Bike", price: 599 });
// const bike = new Product({ price: 599 }); No name, WON'T work
// const bike = new Product({ name: "Mountain Bike", price: "hello!" }); Price can't be converted, WON'T work
// const bike = new Product({ name: "Mountain Bike", price: "599" }); Price can be converted, WILL work
// const bike = new Product({ name: "Mountain Bike", price: 599, color: "red" }); WILL work, BUT color WON'T be added 

bike.save()
    .then(data => {
        console.log("BIKE ADDED");
        console.log(data);
    })
    .catch(err => {
        console.log("ON HO ERROR!");
        console.log(err);
    })