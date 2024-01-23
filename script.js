console.log("Welcome to TIC TAC TOE");
let gameoverAudio = new Audio("assets/gameover.mp3");
let turnMusicAudio = new Audio("assets/ting.mp3");

let turn ="X";
let gameover = false;


//Change Turn
const changeTurn = ()=>{
    return turn  === "X"?"0":"X";

}
//Check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won"
            // musicAudio.play();
            gameover = true;
            gameoverAudio.play()
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";

        }
    })
}
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxes = element.querySelector(".boxtext");
    element.addEventListener("click", (e)=>{
        if(boxes.innerText == ''){
            boxes.innerText = turn;
            turn = changeTurn();
            turnMusicAudio.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

let reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";
})
