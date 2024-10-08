let gameseq=[];
let userseq=[];
let btns= ["red", "yellow", "green", "purple"];

let started= false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started= true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash")
    }, 200);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText= `level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
     btnFlash(randBtn);
}

function checkAns(idx) {
    //let idx= level-1;
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000); 
        }
    }else {
        h2.innerHTML= `GAME OVER!  Your <b>score</b> is <b> ${level} </b>. <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor= btn.getAttribute("id");
    userseq.push(userColor);
    // console.log(userColor);

    checkAns(userseq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level= 0;
}