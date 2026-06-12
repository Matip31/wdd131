const ham=document.querySelector("#ham");
const navigation=document.querySelector(".navigation");
ham.addEventListener("click",function(){
    navigation.classList.toggle("open");
    ham.classList.toggle("open")
});
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
const products = [
  {
    productName: "Imperial Mate",
    type: "mate",
    imageUrl:
    "images/imperial-mate.webp"
  },
  {
    productName: "Messi Thermos",
    type: "thermos",
    imageUrl:
    "images/thermus-messi.webp"
  },
  {
    productName: "Leather Matera",
    type: "matera",
    imageUrl:
    "images/matera-cuero.webp"
  },
  {
    productName: "Brown Imperial Mate",
    type: "mate",
    imageUrl:
    "images/imperial-mate-2.webp"
  },
  {
    productName: "Amazing Thermos",
    type: "thermos",
    imageUrl:
    "images/thermus.webp"
  },
  {
    productName: "Wooden Matera",
    type: "matera",
    imageUrl:
    "images/matera-wood.webp"
  },
  {
    productName: "Classic Mate",
    type: "mate",
    imageUrl:
    "images/classic-mate.webp"
  },
  {
    productName: "Classic Thermos",
    type: "thermos",
    imageUrl:
    "images/classic-thermos.webp"
  },
  {
    productName: "Closed Matera",
    type: "matera",
    imageUrl:
    "images/closed-matera.webp"
  },
  {
    productName: "Thermal Mate",
    type: "mate",
    imageUrl:
    "images/thermal-mate.webp"
  },
  {
    productName: "Small Thermos",
    type: "thermos",
    imageUrl:
    "images/small-thermos.webp"
  },
  {
    productName: "Cloth Matera",
    type: "matera",
    imageUrl:
    "images/cloth-matera.webp"
  },
];
function CreateProductCard(filteredProducts){
    const container=document.querySelector(".container-products");
    container.innerHTML="";
    filteredProducts.forEach(product =>{
    const card=document.createElement("figure");
    const name=document.createElement("figcaption");
    name.textContent=product.productName;
    const image=document.createElement("img");
    image.src=product.imageUrl;
    image.alt=product.productName;
    image.loading="lazy";
    card.appendChild(image);
    card.appendChild(name);
    container.appendChild(card);
    });
}
CreateProductCard(products);
const allLink=document.querySelector("#all");
const mateLink=document.querySelector("#mate");
const thermosLink=document.querySelector("#thermos");
const materasLink=document.querySelector("#materas");
allLink.addEventListener("click",()=>{
    CreateProductCard(products);
});
mateLink.addEventListener("click",()=>{
    let mates=products.filter(product=>{
        const type=product.type;
        return type=="mate";
    })
    CreateProductCard(mates);
});
thermosLink.addEventListener("click",()=>{
    let thermos=products.filter(product=>{
        const type=product.type;
        return type=="thermos";
    })
    CreateProductCard(thermos);
});
materasLink.addEventListener("click",()=>{
    let materas=products.filter(product=>{
        const type=product.type;
        return type=="matera";
    })
    CreateProductCard(materas);
});
