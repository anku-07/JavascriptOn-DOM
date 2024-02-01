// Hello i am a js file
let btn = document.querySelector(".btn");
let h3 = document.querySelector("h3")
btn.addEventListener("click",function(){
    h3.style.color = "red";
})

function getColor(){
    let red = math.floor(math.random() * 255);
    let green = math.floor(math.random() * 255);
    let blue = math.floor(math.random() * 255);
    let color = `Color is ${red} , ${blue} , ${green}`
    console.log(color);
}