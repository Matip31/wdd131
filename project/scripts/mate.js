const ham=document.querySelector("#ham");
const navigation=document.querySelector(".navigation");
ham.addEventListener("click",function(){
    navigation.classList.toggle("open");
    ham.classList.toggle("open")
});
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
