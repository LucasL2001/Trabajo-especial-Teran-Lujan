"use strict"

let div = document.querySelectorAll('.div');

document.querySelector('#btn').addEventListener('click', function(){
    for(let i=0; i < div.length;i++){
        div[i].innerHTML = 'texto a mostrar';
    }; 
})






