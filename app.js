// console.log("Welcome to Color flipper");

const colors=["red","yellow","aqua","lightblue","blue","brown","white"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber=generateRandomNumber();
    // console.log(document.body);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

// generate random number
function generateRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}