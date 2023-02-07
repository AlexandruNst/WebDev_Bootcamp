const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => console.log("CONNECTION ESTABLISHED"))
    .catch(err => console.log(err))


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

const Person = mongoose.model("Person", personSchema);
const tammy = new Person({ first: "Tammy", last: "Chow" });
tammy.save();

console.log(tammy.fullName); //can use it AS A PROPERTY
//  HOWEVER, fullName will NOT exist in the db

// Can also set .set() and we could call
// tammy.fullName = "Tammy Khow" and it will update as if fullName was a property

////// MIDDLEWARE

// These will run before and after saving (and other fucntions, check docs)
personSchema.pre("save", async function () {
    console.log("ABOUT TO SAVE");
})

personSchema.post("save", async function () {
    console.log("JUST SAVED");
})

