const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE");
            } else {
                reject("REQUEST ERROR");
            }
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST");
        console.log(data);

        return fakeRequest('/dogs/2');
    })
    .then((data) => {
        console.log("DONE WITH REQUEST (2)");
        console.log(data);

        return fakeRequest('/dogs/3');
    })
    .then((data) => {
        console.log("DONE WITH REQUEST (3)");
        console.log(data);
    })
    .catch((data) => {
        console.log("OH NO!");
        console.log(data);
    })

//////////////////////

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayedColorChange("red", 1000)
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("purple", 1000))
