"use strict";
let numeroRandom=Math.floor(Math.random()*10000+1);
let numeroRandomHtml=document.querySelector("#numeroRandom");
numeroRandomHtml.innerHTML = numeroRandom;
let button=document.querySelector("#boton");
button.addEventListener("click",verificacion);
function verificacion(evento){ 
    evento.preventDefault();
    let formulario=document.querySelector("#formulario");
    let formData=new FormData(formulario);
    let nombre=formData.get("nombre");
    let apellido=formData.get("apellido");
    let email=formData.get("email");
    let inputCliente=formData.get("inputCliente");
    let verificar=document.querySelector("#verificar");
    if (Number(inputCliente)===numeroRandom) {
        verificar.innerHTML= "el captcha es correcto, enviado";
        formulario.reset();
        
    } else {
        verificar.innerHTML="el captcha es incorrecto";
        
    }
}