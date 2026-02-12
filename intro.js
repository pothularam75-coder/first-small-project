const input = document.querySelector(".input-ele");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let computerNum = Math.floor(Math.random() * 100);
console.log(computerNum);
let para = document.createElement("p");
para.classList.add("para1");
container.appendChild(para);
function checkBtn(){
    const userValue = Number(input.value);
    if(computerNum == userValue){
        para.innerText = `You guessed right. ${computerNum} is the number.`;
        input.value = '';
        
    }
    else if(computerNum > userValue){
        para.innerText = `${input.value} is too low.`;
        input.value = '';
    }
    else if(computerNum < userValue){
        para.innerText = `${input.value} is too high.`;
        input.value = '';
    }
}
input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        checkBtn();
    }
})
