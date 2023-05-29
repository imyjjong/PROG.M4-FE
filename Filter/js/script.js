let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let gtaFilter = document.getElementById("checkbox-gta");
let codFilter = document.getElementById("checkbox-cod");
let fifaFilter = document.getElementById("checkbox-fifa");

gtaFilter.onchange = function(){
    if(gtaFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "flex";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "none";
            }
        }
    }
}

codFilter.onchange = function(){
    if(codFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "shooter"){
                allGames[i].style.display = "flex";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "shooter"){
                allGames[i].style.display = "none";
            }
        }
    }
}

fifaFilter.onchange = function(){
    if(fifaFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sports"){
                allGames[i].style.display = "flex";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sports"){
                allGames[i].style.display = "none";
            }
        }
    }
}