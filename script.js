console.log('Welcome To Tic Tac Toe');

// Variables 
let bgMusic = new Audio("music.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let turnChangeMusic = new Audio("ting.mp3");
let Turn ='X';
let boxes = document.querySelectorAll('.box');
let info = document.getElementsByClassName('info');
let XorO = document.querySelectorAll('.XorO');
let imageBox = document.querySelector('.imageBox');
let gameover =  false; 
let reset = document.getElementById('reset');
let Line = document.querySelector('.line')

bgMusic.play()

// Functions
// function to change turn
const changeTurn = ()=>{
    return Turn === 'X'?'0':'X';
}
// function to check for a win
const CheckWin = ()=>{
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,14.8,90],
        [0,4,8,5,14.8,45],
        [2,4,6,5,14.8,135],
    ]
    wins.forEach(e => {
        if((XorO[e[0]].innerText === XorO[e[1]].innerText) && (XorO[e[2]].innerText === XorO[e[1]].innerText) && (XorO[e[0]].innerText !== "")){
            document.getElementById('INFO').innerText = XorO[e[0]].innerText + ' Won';
            imageBox.getElementsByTagName('img')[0].style.width = '22vw';
            Line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            Line.style.width = '20vw';
            gameover = true;
        }
    })
}

// Game Logic
Array.from(boxes).forEach(element => {
    let XorO = element.querySelector('.XorO');
    element.addEventListener('click', ()=>{
        if(XorO.innerText === ''){
            XorO.innerText =Turn;
            Turn = changeTurn();
            turnChangeMusic.play();
            CheckWin();
            if(!gameover){
                info[0].innerText = "Turn for " + Turn;
            }
            
        }
    })
})

// reset button logic
reset.addEventListener('click',()=>{
    Array.from(XorO).forEach(element =>{
        element.innerHTML = "";
    })
    imageBox.getElementsByTagName('img')[0].style.width = '0';
    Turn = "X";
    gameover = false
    info[0].innerText = "Turn for " + Turn;
    Line.style.width = '0';
})
