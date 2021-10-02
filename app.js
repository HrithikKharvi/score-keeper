//This is according lecture which is pretty simple

let player1 = {
    button: document.querySelector("#playerOne"),
    score: 0,
    display: document.querySelector("#pOne")
}

let player2 = {
    button: document.querySelector("#playerTwo"),
    score: 0,
    display: document.querySelector("#pTwo")
}

let resetButton = document.querySelector("#reset");
let select = document.querySelector("select");
let winScore = parseInt(select.value);
let win = false;

document.querySelector("select").addEventListener("change", function () {
    winScore = parseInt(select.value);
    reset();
})


player1.button.addEventListener("click", () => {
    updateScore(player1, player2);
});

player2.button.addEventListener("click", () => {
    updateScore(player2, player1);
});

function updateScore(player, opponent) {
    if (!win) {
        player.score += 1;
        console.log(player.score);
        if (player.score === winScore) {
            console.log("Entered")
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            win = true;
        }
        player.display.innerText = player.score;
        console.log("xxxx")
    }
}

resetButton.addEventListener("click", () => {
    reset();
})

let reset = function () {
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.innerText = 0;
        player.display.classList.remove("has-text-success", "has-text-danger");
        player.button.disabled = false;
        win = false;
    }
}





