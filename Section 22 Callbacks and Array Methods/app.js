const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function print(element) {
    console.log(element);
}

numbers.forEach(print)

//////

numbers.forEach(function (el) {
    console.log(el);
})

/////

let doubles = numbers.map(function (num) {
    return num * 2;
})