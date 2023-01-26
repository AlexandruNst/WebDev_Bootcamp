function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

/// 

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: "Felidae" }
const copyCat = { ...feline, isPet: true };

///

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

function race(first, second, ...rest) {
    console.log(first);
    console.log(second);
    console.log(rest);
}

////

const scores = [10, 20, 30, 40, 50]
const [gold, silver, bronze] = scores;

const user = {
    firstName: "Harvey",
    lastName: "Milk"
}
const { firstName, lastName } = user;
const { firstName: usersFirstName } = user;
const { born = 1970, name = firstName } = user;

function fullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`)
}