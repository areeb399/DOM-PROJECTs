const box = document.getElementById("click") ;

box.addEventListener("click" , function() {
    document.getElementById("click").innerText = "How Are You?";
    document.getElementById("click").style.backgroundColor = "Red";
});