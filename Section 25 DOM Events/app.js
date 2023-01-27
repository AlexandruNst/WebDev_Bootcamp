const btn = document.querySelector("#btn");

btn.onclick = function () {
    console.log("You clicked me!")
}

btn.onmouseenter = function () {
    btn.style.backgroundColor = "red";
}

btn.onmouseleave = function () {
    btn.style.backgroundColor = "unset";
}
