"use strict"

let btnmenu= document.querySelector(".btn_menu")

btnmenu.addEventListener("click",togglemenu);

function togglemenu(){
    document.querySelector(".navegacion").classList.toggle("show");
}
