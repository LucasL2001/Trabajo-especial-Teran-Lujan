"use strict"
let btns= document.querySelectorAll('#btn');

let divs= document.querySelectorAll('#div');

for(let i =0; i< btns.length; i++){
    btns[i].addEventListener('click', function(){
        for(let j=0; j<divs.length; j++){
            divs[j].innerHTML='';
        }
        divs[i].innerHTML='este btn se apreto'
    })
}
//punto 5//
document.querySelector('#btn-muestra').addEventListener('click', function(){
    let nombre= document.querySelector('#nombre').value;
    let apellido= document.querySelector('#apellido').value;
    document.querySelector('#muestranombre').innerHTML= nombre + ' ' + apellido;
})

//punto 6//
document.querySelector('#btn-tarea').addEventListener('click', function(){
    let tarea= document.querySelector('#tarea').value;
    let listareas= document.querySelector('#list-tareas');
    listareas.innerHTML = listareas.innerHTML + '<li>' + tarea + '</li>';
});

//punto7//
document.querySelector('#cambiatoh').addEventListener('click', function(){
    document.querySelector('#cambiame').classList.add('cambiatoh');
})

//punto 8//
document.querySelector('#btn-muestradiv').addEventListener('click', function(){
    document.querySelector('#div-desaparece').classList.toggle('noestoy');
})

//punto 9//
document.querySelector('#calculadora').addEventListener('click', function(){
    document.querySelector('#open-calculadora').classList.toggle('calculadora');
})
document.querySelector('#suma').addEventListener('click', function(){
    let n1 = document.querySelector('#n1').value;
    n1=n1*1;
    let n2 = document.querySelector('#n2').value;
    n2=n2*1;
    document.querySelector('#resultado').innerHTML = n1 + n2 ; 
})
document.querySelector('#resta').addEventListener('click', function(){
    let n1 = document.querySelector('#n1').value;
    n1=n1*1;
    let n2 = document.querySelector('#n2').value;
    n2=n2*1;
    document.querySelector('#resultado').innerHTML = n1 - n2 ;
})
    document.querySelector('#multiplica').addEventListener('click', function(){
        let n1 = document.querySelector('#n1').value;
        n1=n1*1;
        let n2 = document.querySelector('#n2').value;
        n2=n2*1;
        document.querySelector('#resultado').innerHTML = n1 * n2 ; 
})
document.querySelector('#divide').addEventListener('click', function(){
    let n1 = document.querySelector('#n1').value;
    n1=n1*1;
    let n2 = document.querySelector('#n2').value;
    n2=n2*1;
    document.querySelector('#resultado').innerHTML = n1 / n2 ; 
}) 

//punto 10//

//punto 11//
document.querySelector('#btn-creartarjeta').addEventListener('click', function(){
    let nombre= document.querySelector('#inp-nombre').value;
    let apellido= document.querySelector('#inp-apellido').value;
    let email= document.querySelector('#inp-email').value;
    let profecion= document.querySelector('#inp-profecion').value;
    let telefono= document.querySelector('#inp-telefono').value;
    let direccion= document.querySelector('#inp-direccion').value;

    document.querySelector('.tarjeta-nombreapellido').innerHTML=apellido + ' ' + nombre;
    document.querySelector('.tarjeta-profecion').innerHTML= profecion;
    document.querySelector('.tarjeta-email').innerHTML= email;
    document.querySelector('.tarjeta-telefono').innerHTML= telefono;
    document.querySelector('.tarjeta-direccion').innerHTML= direccion;
})

//punto 12//
document.querySelector('#apostar').addEventListener('click', function(){
    let resultado = Math.floor(Math.random()*36)+1;
    let apostada= document.querySelector('#apostada').value;
    apostada*1;
    if(apostada == resultado){
        alert('ganaste');
    }else{
        alert('perdiste')
    }
})


