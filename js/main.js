"use strict"
window.onscroll = function(){
    agregaclass();
}

function agregaclass() {
    if ( window.pageYOffset === 0 ){
        document.querySelector('#pagina').classList.remove('nav-sticky');
    }else{
        document.querySelector('#pagina').classList.add('nav-sticky');
    }
}