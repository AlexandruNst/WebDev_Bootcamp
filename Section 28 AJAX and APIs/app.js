fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESOLVED!!");
        console.log(res);
        return res.json();
    })
    .then(data => console.log(data))
    .catch(e => {
        console.log("REJECTED!!");
        console.log(e);
    })

/////////

fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESOLVED!!");
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2")
    })
    .then(res => {
        console.log("RESOLVED!!");
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log("REJECTED!!");
        console.log(e);
    })

///////////

const loadSW = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!");
        console.log(e);
    }

}

loadSW();

/////////////////////// AXIOS

axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        console.log(res.data);
    })

// OR

const loadAxiosSW = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1");
    console.log(res.data);
}

loadAxiosSW();

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("li");
    newLI.innerText = jokeText;
    jokes.appendChild(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com", config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE, SORRY!"
    }
}


button.addEventListener("click", addNewJoke)