const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require("./product")

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name."]
    },
    city: String,
    email: {
        type: String,
        required: [true, "Email required."]
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})

// This doesn't have access to the farm that's being deleted
// Makes sense, because we're not deleting anything yet, we're in PRE
// farmSchema.pre('findOneAndDelete', async function (farm) {
//     console.log("PRE DELETE");
//     console.log(farm);
// }) 

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
})

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;