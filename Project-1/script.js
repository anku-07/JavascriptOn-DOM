let istatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");

let removeFriend = document.querySelector("#remove");
let count = 0;


addFriend.addEventListener("click",function(){
    if(count == 0){
        istatus.style.color = "green"
        istatus.innerHTML = "Friends🥳";
        addFriend.innerHTML = "Remove Friend"
        count = 1;
    }else{
        istatus.style.color = "red"
        istatus.innerHTML = "Stranger😏";
        addFriend.innerHTML = "Add Friend"
        count = 0;
    }
});
