var istatus = document.querySelector("h5")
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function(){
    if(check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        check = 1;
    }else {
        istatus.innerHTML = "Add Friend";
        btn.innerHTML = "Add Friend";
        istatus.style.color = "red";
        check = 0;
    }
});

// var removeFriend = document.querySelector("#remove");
// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// });

