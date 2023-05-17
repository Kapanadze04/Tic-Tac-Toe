const choiceButtons = document.querySelectorAll('.btn-box');
const gameBtns = document.querySelectorAll('.game-btn');
const home = document.querySelector('#home');
const game = document.querySelector('#game');
const xScoreTxt = document.querySelector('#x-scoreTxt');
const oScoreTxt = document.querySelector('#o-scoreTxt');
const xScore = document.querySelector('#x-score');
const oScore = document.querySelector('#o-score');
const turnImg = document.querySelector('.turn-box img');
const infoWindow = document.querySelector('#info-window');
const infoWindowTxt = document.querySelector('.info-window-txt');
const infoWindowIcon = document.querySelector('.icon-txt img');
const resultTitle = document.querySelector('.result-title');


infoWindow.style.display = "none";

let player1 = 'x';
let mode = 'cpu';
let turn = "x";
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];
let xscore = 0;
let drawScore = 0;
let oscore = 0;
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
        player1 = "x";
    } else {
        choiceButtons[1].classList.add("active");
        choiceButtons[0].classList.remove("active");
        player1 = "o";
    }
}

function checkXwin() {
    return winnerCombinations.find((combination) => 
    combination.every((button) => xArray.includes(button)));
};

function checkOwin() {
    return winnerCombinations.find((combination) => 
    combination.every((button) => oArray.includes(button)));
};

function winX() {
    infoWindow.style.display = "flex";
    infoWindowIcon.src = "./assets/icon-x.svg";
    resultTitle.style.color = "#31C3BD";
    xscore++;
    xScore.textContent = xscore;
    if(player1 === "x") {
        infoWindowTxt.textContent = "YOU WON!";
    } else {
        infoWindowTxt.textContent = "OH NO, YOU LOST…";
    }
}

function winO() {
    infoWindow.style.display = "flex";
    infoWindowIcon.src = "./assets/icon-o.svg";
    resultTitle.style.color = "#F2B137";
    oscore++;
    oScore.textContent = oscore;
    if(player1 !== "x") {
        infoWindowTxt.textContent = "YOU WON!";
    } else {
        infoWindowTxt.textContent = "OH NO, YOU LOST…";
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
                xArray.push(index);
                const win = checkXwin();
                if(win) {
                    winX();
                    return;
                } 
                turn = "o";
                turnImg.src = "./assets/ogray.svg";
            } else {
                icon.src = "./assets/icon-o.svg";
                event.target.append(icon);
                oArray.push(index);
                const win = checkOwin();
                if(win) {
                    winO();
                    return;
                } 
                turn = "x";
                turnImg.src = "./assets/gray.svg";
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

    if(modeParam === "player") {
        if(player1 === "x") {
            xScoreTxt.textContent = "X (P1)";
            oScoreTxt.textContent = "O (P2)";
        } else {
            xScoreTxt.textContent = "X (P2)";
            oScoreTxt.textContent = "O (P1)";
        }
    } else {
        if(player1 === "x") {
            xScoreTxt.textContent = "X (YOU)";
            oScoreTxt.textContent = "O (CPU)";
        } else {
            xScoreTxt.textContent = "X (CPU)";
            oScoreTxt.textContent = "O (YOU)";
        }
    }
}