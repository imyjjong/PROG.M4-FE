const base = document.getElementById("js--base");
const sheis = document.getElementById("js--sheis");
const opone = document.getElementById("js--opone");
const optwo = document.getElementById("js--optwo");
const poet = document.getElementById("js--poet");
const products = document.getElementsByClassName("product");
const modal = document.getElementsByClassName("modal");
const buttonBase = document.getElementsByClassName("modal__button");

base.onclick = function(){
    for(let i = 0; i < products.length; i++){
        products[i].style.display = "none";
        modal[0].style.display = "grid";
    }
}

sheis.onclick = function(){
    for(let i = 0; i < products.length; i++){
        products[i].style.display = "none";
        modal[1].style.display = "grid";
    }
}

opone.onclick = function(){
    for(let i = 0; i < products.length; i++){
        products[i].style.display = "none";
        modal[2].style.display = "grid";
    }
}

optwo.onclick = function(){
    for(let i = 0; i < products.length; i++){
        products[i].style.display = "none";
        modal[3].style.display = "grid";
    }
}

poet.onclick = function(){
    for(let i = 0; i < products.length; i++){
        products[i].style.display = "none";
        modal[4].style.display = "grid";
    }
}

for(let i = 0; i < buttonBase.length; i++){
buttonBase[i].onclick = function(){
    for(let i = 0; i < products.length; i++){
    modal[i].style.display = "none";
    products[i].style.display = "block";
}}}
