const ham=document.querySelector("#ham");
const navigation=document.querySelector(".navigation");
ham.addEventListener("click",function(){
    navigation.classList.toggle("open");
    ham.classList.toggle("open")
});
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;

let messageCount=Number(localStorage.getItem("messageCount"))||0;
messageCount++;
localStorage.setItem("messageCount",messageCount);
const container=document.getElementById("thank-you");
const p=document.createElement("p");
p.textContent=`You have sent ${messageCount} messages`;
container.appendChild(p);