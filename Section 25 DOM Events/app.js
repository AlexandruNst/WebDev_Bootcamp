const btn = document.querySelector("#btn");

btn.onclick = function () {
    console.log("You clicked me!")
}

btn.onmouseenter = function () {
    btn.style.backgroundColor = "red";
}

btn.onmouseleave = () => {
    btn.style.backgroundColor = "unset";
}

/////////////

const btn2 = document.querySelector("#btn2");

btn2.addEventListener('click', () => {
    alert("Clicked!")
})


const btn3 = document.querySelector("#btn3");

const twist = () => {
    console.log("TWIST!");
}

const shout = () => {
    console.log("SHOUT!");
}

btn3.addEventListener('click', twist, { once: true });
btn3.addEventListener('click', shout);