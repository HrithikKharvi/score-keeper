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





//This is my way of doing things 

// let score = document.querySelector("#score");
// let select = document.querySelector("select");
// let maxScore = select.value;

// // let button1 = document.querySelector("#playerOne");
// // let button1 = document.querySelector("#playerTwo");

// select.addEventListener("change", () => {
//     maxScore = select.value;
//     reset();
// })

// let p1 = document.querySelector("#pOne");
// let p2 = document.querySelector("#pTwo");
// let buttons = document.getElementsByTagName("button");

// for (let button of buttons) {
//     button.addEventListener("click", function () {
//         getScore(button.id);
//     })
// }

// function getScore(id) {

//     let p1Score = parseInt(p1.innerText);
//     let p2Score = parseInt(p2.innerText);

//     if (id == "playerOne") {
//         if (p1Score < maxScore && p2Score != maxScore) {
//             p1Score = ++p1Score;
//             p1.innerText = `${p1Score}`;
//         }

//         check(p1Score, p2Score);

//     } else if (id == "playerTwo") {
//         if (p2Score < maxScore && p1Score != maxScore) {
//             p2Score = ++p2Score;
//             p2.innerText = `${p2Score}`;
//         }

//         check(p1Score, p2Score);
//     } else {
//         reset();
//     }
// }

// function check(win, looser) {
//     if (win == maxScore && looser < maxScore) {
//         buttons[0].disabled = true;
//         buttons[1].disabled = true;

//         p1.classList.add("has-text-success");
//         p2.classList.add("has-text-danger");
//     } else if (win < maxScore && looser == maxScore) {
//         buttons[0].disabled = true;
//         buttons[1].disabled = true;
//         p2.classList.add("has-text-success");
//         p1.classList.add("has-text-danger");
//     }
// }

// function reset() {
//     buttons[0].disabled = false;
//     buttons[1].disabled = false;


//     p1.innerText = "0";
//     p2.innerText = "0";
//     p1.classList = "";
//     p2.classList = "";
// }
