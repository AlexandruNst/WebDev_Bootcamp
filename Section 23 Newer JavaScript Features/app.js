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