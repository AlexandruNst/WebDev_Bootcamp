const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be blank"]
    },
    password: {
        type: String,
        required: [true, "Username cannot be blank"]
    }
})

userSchema.statics.findAndValidate = async function (username, password) {
    // this refers to the schema/model
    const foundUser = await this.findOne({ username });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

userSchema.pre("save", async function (next) {
    // this refers to this particular user that we're saving
    // we call user.save() -> that's why!

    // this is there cus "save" is called when we update too
    // on an update that is not for pw, we don't want to rehash the pw
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model("User", userSchema);