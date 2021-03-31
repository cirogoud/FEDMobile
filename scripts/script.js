// codepen.io/kristyjy/pen/zGOXYb

// codepen.io/Ayush-Rajniwal/pen/oNYmRJX

// codepen.io/useAnimations/pen/argQEp

// youtube.com/watch?v=dIyVTjJAkLw

// https://stackoverflow.com/questions/4847996/css-animation-onclick

// var winnerValue = [
//     {
//         imagePath: "./images/1.jpg",
//         imageValue: 1,
//         imageName: "Winnaar1"
//     },
//     {
//         imagePath: "./images/2.jpg",
//         imageValue: 2,
//         imageName: "Winnaar2"
//     },    
//     {
//         imagePath: "./images/3.jpg",
//         imageValue: 3,
//         imageName: "Winnaar3"
//     },
//     {
//         imagePath: "./images/4.jpg",
//         imageValue: 4,
//         imageName: "Winnaar4"
//     },
//     {
//         imagePath: "./images/5.jpg",
//         imageValue: 5,
//         imageName: "Winnaar5"
//     }
// ];

// var winnerMessage = winnerValue[Math.floor(Math.random() * winnerValue.length)];
// document.getElementById("hallingerBericht").src = winnerMessage.imagePath;
// var bericht1 = winnerMessage;



// function shake(){
//     document.getElementById('BtnWomen').className ='classname';

var x = document.getElementsByClassName("redbtn");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "orange";
}