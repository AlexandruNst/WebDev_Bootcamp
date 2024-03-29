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


/////////////////////////

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials!";
    if (password === "corgisarecute") return "WELCOME!";
    throw "Invalid password";
}

login("myusername", "corgisarecute")
    .then(msg => {
        console.log("Logged in!");
        console.log(msg);
    })
    .catch(msg => {
        console.log("ERROR!");
        console.log(msg);
    }
    )

//////////////////////////////

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('purple', 1000);
    return "Rainbow DONE!" //this is a promise!
}

rainbow().then(msg => {
    console.log("ALL DONE!");
    console.log(msg);
})

// OR

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!");
}


async function makeRequest() {
    try {
        let data1 = await fakeRequest("/page1");
        let data2 = await fakeRequest("/page2");
        console.log(data1, data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!!!");
        console.log("Error: ", e);
    }
}

makeRequest();