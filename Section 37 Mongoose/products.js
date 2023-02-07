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
        min: [0, "Price must be positive ya dodo!"]
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

Product.findByIdAndUpdate({}, {}, { runValidators: true }); //will make sure our Validations are checked on update. Otherwise, they're not, by default.

// this function will be available to ALL INSTANCES of Product
// defined on the model
// INSTANCE METHODS
// these live on INSTANCES of the model
// this refers to individual instances
productSchema.methods.greet = function () {
    console.log("Hi!");
    this.onSale = !this.onSale;
    return this.save(); // save() returns a Promise
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mountain Bike" })
    await foundProduct.greet();
    console.log(foundProduct);
}

// this function is defined on the Product STATICALLY
// STATIC METHODS
// we call it on the model (capital letter) NOT on individual objects
// these don't have to do with individual products, but rather all products or the Product model in general
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 }) //also returns a Promise
}

Product.fireSale().then(data => console.log(data));