const out = document.getElementById("out");

out.addEventListener("mouseout", function() {

    alert("danger!")
    document.getElementById("out").style.backgroundColor = "red" ;
    document.getElementById("out").style.color = "white" ;

});