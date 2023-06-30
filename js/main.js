"use strict"
window.addEventListener("scroll", ()=>{

    let pagina =document.querySelector('#pagina')

    if ( window.pageYOffset === 0 ){
        pagina.classList.remove('nav-sticky');
    }else{
        pagina.classList.add('nav-sticky');
}})
