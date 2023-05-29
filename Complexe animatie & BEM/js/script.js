let profiles = document.getElementsByClassName("profile");

for(let i = 0; i < profiles.length; i++){
    profiles[i].onclick = function(){
        profiles[i].style.animationName = "expand";
        profiles[i].children[1].children[0].style.animationName = "popup";
        profiles[i].children[2].children[0].style.animationName = "popupHeart";
    }
    profiles[i].onkeyup = function(event){
        if(event.keyCode === 32){
            profiles[i].style.animationName = "expand";
            profiles[i].children[1].children[0].style.animationName = "popup";
            profiles[i].children[2].children[0].style.animationName = "popupHeart";
        }
    }
}

// ik maak de mindmap op school