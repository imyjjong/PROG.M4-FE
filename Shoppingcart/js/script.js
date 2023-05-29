const addToCartButton = document.getElementsByClassName("games__button");
const shoppingModal = document.getElementById("js--shoppingModal");
let message = 0;
let dobby = 0;
let c3po = 0;
let rocket = 0;
let dobbyPrice = 0;
let c3poPrice = 0;
let rocketPrice = 0;
let modalIsOpen = false;

for(let i = 0; i < addToCartButton.length; i++){
    addToCartButton[i].onclick = function(){
        message = message + 1;
        document.getElementById("js--message").innerHTML = message;
        switch(addToCartButton[i].dataset.product){
            case "dobby":
                dobby = dobby + 1;
                document.getElementById("js--dobby").innerHTML = dobby + "x";
                dobbyPrice = dobbyPrice + 27;
                document.getElementById("js--dobbyPrice").innerHTML = "€" + dobbyPrice;
                break;
            case "c3po":
                c3po = c3po + 1;
                document.getElementById("js--c3po").innerHTML = c3po + "x";
                c3poPrice = c3poPrice + 54;
                document.getElementById("js--c3poPrice").innerHTML = "€" + c3poPrice;
                break;
            case "rocket":
                rocket = rocket + 1;
                document.getElementById("js--rocket").innerHTML = rocket + "x";
                rocketPrice = rocketPrice + 35;
                document.getElementById("js--rocketPrice").innerHTML = "€" + rocketPrice;
                break;
        }

        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            }, 2000);
        
    }}
}

document.getElementsByTagName("i")[2].style.display = "none";

const checkoutButton = document.getElementById("js--checkoutButton");
const checkout = document.getElementById("js--checkout");
let checkoutOpen = false;

checkoutButton.onclick = function(){
        if(checkoutOpen === false){
            document.getElementsByTagName("main")[0].style.display = "none";
                checkout.style.display = "block";
                checkoutOpen = true;
                document.getElementsByTagName("i")[1].style.display = "none";
                document.getElementsByTagName("i")[2].style.display = "block";
                document.getElementById("js--message").style.display = "none"
        }
        else{
            document.getElementsByTagName("main")[0].style.display = "flex";
            checkout.style.display = "none";
            checkoutOpen = false;
            document.getElementsByTagName("i")[1].style.display = "block";
            document.getElementsByTagName("i")[2].style.display = "none";
            document.getElementById("js--message").style.display = "flex";
        }
    }

const searchBar = document.getElementById("js--searchBar");
const games = document.getElementsByClassName("games__game");
searchBar.onkeyup = function(event){
    if(event.keyCode === 13){
        let searchTerm = searchBar.value.toUpperCase().split(" ").join("");
        console.log(searchTerm);
        for(let i = 0; i < games.length; i++){
            if(games[i].dataset.title.search(searchBar.value) === -1){
                games[i].style.opacity = "0.3";
            }
            else{
                games[i].style.opacity = "1";
            }
        }
    }
}

//VRAGEN OVER DIE RETURN; WANT VOLGENS MIJ HEB IK DIE HELEMAAL NIET NODIG EN DE OPACITY