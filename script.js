console.log("Welcome to TIC TAC TOE");
let music = new Audio("assets/music.mp3");
let gameover = new Audio("assets/gameover.mp3");
let turnMusic = new Audio("assets/ting.mp3");

let turn ="X";

const changeTurn = ()=>{
    return turn  === "X"?"0":"X";
}

const checkWin = ()=>{

}