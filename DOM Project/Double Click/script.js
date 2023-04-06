const dbl = document.getElementById("tap");

dbl.addEventListener("dblclick", function() {
    document.getElementById("tap").innerText = "Surprise!" ;
    document.getElementById("tap").style.backgroundColor = "red";
});