const mouse = document.getElementById("over");


mouse.addEventListener("mouseover", function () {
  document.getElementById("over").innerText = "Alert";
  document.getElementById("over").style.backgroundColor = "red" ;
  document.getElementById("over").style.padding = "14px" ;
});