const newGameCpu = document.getElementById('new-game-cpu');
const newGamePlayer = document.getElementById('new-game-player');
const btnBox = document.querySelectorAll('.btn-box')
const home = document.getElementById('home');
const game = document.getElementById('game');
const gameBtns = document.querySelectorAll('.game-btn');


let player = "x";
// let mode = "cpu";
// let turn = "x";
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let xArray = [];
// let oArray = [];
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

newGameCpu.addEventListener('click', function() {
    home.style.display = 'none';
    game.style.display = 'block';
})

newGamePlayer.addEventListener('click', function() {
    home.style.display = 'none';
    game.style.display = 'block';
})




function activateBtn(icon){
    if(icon === "x"){
        btnBox[0].classList.add("active")
        btnBox[1].classList.remove("active")
        player = "x"
    } else {
        btnBox[1].classList.add("active")
        btnBox[0].classList.remove("active")
        player = "o"
    }
}





// function onHoverEffects() {
//     for (let index = 0; index < freeButtons.length; index++) {
//         const playButtonIndex = freeButtons[index];
//         if(turn === "x") {
//             playButtons[playButtonIndex].classList.add("xHover");
//             playButtons[playButtonIndex].classList.remove("oHover");
//         } else {
//             playButtons[playButtonIndex].classList.add("oHover");
//             playButtons[playButtonIndex].classList.remove("xHover");
//         }
        
//     }
// }

// function createClicked() {
//     for (let index = 0; index < playButtons.length; index++) {
//         playButtons[index].onclick = (event) => {
//             event.target.classList.remove("xHover");
//             event.target.classList.remove("oHover");


//             const spliceIndex = freeButtons.indexOf(index);
//             freeButtons.splice(spliceIndex, 1);
//             const icon = document.createElement("img");
//             icon.classList.add("play-icons");
//             if(turn === "x"){
//                 icon.src = "./assets/icon-x.svg";
//                 event.target.append(icon);
//                 turn = "o";
                
//             } else {
//                 icon.src = "./assets/icon-o.svg";
//                 event.target.append(icon);
//                 turn = "x";
//             }
//             onHoverEffects();

//             event.target.onclick = null;
//         }
        
//     }
// }

// function startGame(modeParam) {
//     home.style.display = "none";
//     board.style.display = "flex";

//     mode = modeParam;
//     onHoverEffects();
//     createClicked();
// }


