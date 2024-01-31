let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let para = document.querySelector('p')
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});
function levelUp(){
    level++;
    para.innerHTML = `Level ${level}`;
}