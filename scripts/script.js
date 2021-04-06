let canvas = document.getElementById("offCanvas1")
let hamburger = document.getElementById("hamburger") 
let close = document.getElementById("close")

hamburger.addEventListener("click", function(){
    canvas.style.left = "0";
    console.log("Menu geopend");
})

close.addEventListener("click", function(){
    canvas.style.transform = "rotate(360deg)";
    canvas.style.left = "-50vw";
    console.log("Menu gesloten");
})

