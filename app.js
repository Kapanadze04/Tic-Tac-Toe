const choiceButtons = document.querySelectorAll('.btn-box');
const gameBtns = document.querySelectorAll('.game-btn');
const home = document.querySelector('#home');
const game = document.querySelector('#game');

let player = 'x';
let mode = 'cpu';
let turn = "x";
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];
let winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function activateIcon(icon) {
    if(icon === "x") {
        choiceButtons[0].classList.add("active");
        choiceButtons[1].classList.remove("active");
        player = "x";
    } else {
        choiceButtons[1].classList.add("active");
        choiceButtons[0].classList.remove("active");
        player = "o";
    }
}


function hoverEffects() {
    for (let index = 0; index < freeButtons.length; index++) {
        const gameBtnsIndex = freeButtons[index];
        if(turn === "x") {
            gameBtns[gameBtnsIndex].classList.add("xHover");
            gameBtns[gameBtnsIndex].classList.remove("oHover");
        } else {
            gameBtns[gameBtnsIndex].classList.add("oHover");
            gameBtns[gameBtnsIndex].classList.remove("xHover");
        }
    }
}

function clickedFunction() {
    for (let index = 0; index < gameBtns.length; index++) {
        gameBtns[index].onclick = (event) => {
            event.target.classList.remove("xHover");
            event.target.classList.remove("oHover");

            const spliceIndex = freeButtons.indexOf(index);
            freeButtons.splice(spliceIndex, 1);

            const icon = document.createElement("img");
            icon.classList.add("game-icons");
            
            if(turn === "x") {
                icon.src = "./assets/icon-x.svg";
                event.target.append(icon);
                turn = "o";
            } else {
                icon.src = "./assets/icon-o.svg";
                event.target.append(icon);
                turn = "x";
            }

            hoverEffects();

            event.target.onclick = null;
        }
        
    }
}

function startGame(modeParam) {
    home.style.display = "none";
    game.style.display = "block";
    mode = modeParam;
    hoverEffects();
    clickedFunction();
}