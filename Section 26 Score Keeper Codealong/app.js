const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("playTo");

let winningScore = 5;
let isGameOver = false;

const updateScores = (player, opponent) => {
    if (!isGameOver) {
        player.score++;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
        }
    }
}

p1.button.addEventListener("click", () => {
    updateScores(p1, p2);
})

p2.button.addEventListener("click", () => {
    updateScores(p2, p1);
})

const reset = () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = "0";
        p.display.classList.remove("winner", "loser");
    }
}

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(this.value);
    reset();
})