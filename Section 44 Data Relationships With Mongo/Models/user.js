const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => console.log("Mongo connection open"))
    .catch(err => console.log(err))

// ONE TO FEW
// Populate the reference on the document
// "Embed"

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter",

    })
    u.addresses.push({
        street: "123 Sesame Street",
        city: "New York",
        state: "NY",
        country: "USA"
    })

    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: "99 3rd Street",
            city: "New York",
            state: "NY",
            country: "USA"
        }
    )
    const res = await user.save();
    console.log(res);
}

// makeUser();
addAddress("63ee21e6c0a33d1e72a86092");