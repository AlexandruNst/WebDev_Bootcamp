const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => console.log("Mongo connection open"))
    .catch(err => console.log(err))

// ONE TO VERY MANY
// Put a reference of the parent on the child, not the other way around
// "Store reference on child"

const userSchema = Schema({
    username: String,
    age: Number
})

const tweetSchema = Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" }
})

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
    const user = new User({ username: "chickenfan99", age: 61 });
    const tweet1 = new Tweet({ text: "omg i love my chicken family!", likes: 0 });
    tweet1.user = user;
    await user.save();
    await tweet1.save();
}

const addTweet = async () => {
    const user = await User.findOne({ username: "chickenfan99" });
    const tweet2 = new Tweet({ text: "chickens", likes: 1290 });
    tweet2.user = user;
    await tweet2.save();
}

// makeTweets();
// addTweet();

Tweet.findOne({}).populate("user").then(tweet => console.log(tweet));