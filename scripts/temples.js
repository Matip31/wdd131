const ham=document.querySelector("#ham");
const navigation=document.querySelector(".navigation");
ham.addEventListener("click",function(){
    navigation.classList.toggle("open");
    ham.classList.toggle("open")
});