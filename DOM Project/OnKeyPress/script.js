const display = document.getElementById("display");
const input = document.getElementById("input");

input.addEventListener("keypress", function(e){
    display.innerText = "You just pressed  :  " + e.key ;
});