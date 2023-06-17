console.log("en js");

let principal = document.getElementById("principal");
let menu = document.getElementById("menu");

function cambiarColor(color){
    let cambiar=document.getElementsByClassName("cambiarColor");
    for(let obj of cambiar){
        obj.style.color=color;
    }
}

addEventListener("scroll", (event) => {
    console.log(principal.getBoundingClientRect().top);

    if(screen.width >= 575.99){
        console.log("cel");
        if ((principal.getBoundingClientRect().top != 0)) {
            console.log("dentro");
            menu.style.backgroundColor = "rgba(255, 255, 255,1)";
            cambiarColor("black");
        } else {
            menu.style.backgroundColor = "rgba(255, 255, 255,0)";
            cambiarColor("white");
        }
    }
    

});
