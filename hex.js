// console.log("Welcome to color flipper");
const hexColor=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function(){
    
    let hex="#";
    for(let i=0;i<6;i++){
        const randomNumber=generateRandomNumber();
        hex+=hexColor[randomNumber];
    }
    // console.log(document.body);
    document.body.style.backgroundColor=hex;
    color.textContent=hex;
});

function generateRandomNumber(){
    return Math.floor(Math.random()*hexColor.length);
}