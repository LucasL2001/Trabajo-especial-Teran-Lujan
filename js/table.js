"use strict"
let listaevento= [
    {
        nombre: 'La Llamada Del Hada',
        dia: '06/06',
        lugar: '"el dique", Tandil, Bs As'
    },
    {
        nombre: 'La Casa Del Troll',
        dia: '11/07',
        lugar: '"la sima de las animas", Tandil, Bs As'
    },
    {
        nombre: 'El Sueño de La Vampiro',
        dia: '23/10',
        lugar:'"La Cruz del Cerro" , Tandil, Bs As'
    }]
mostrar()

document.querySelector('#btn-agregar').addEventListener('click', agregar)

document.querySelector('#btn-agregar3').addEventListener('click', ()=>{
    for(let i=0; i< 3; i++){
        agregar()
    }
})



document.querySelector('#btn-delete').addEventListener('click', quitaevento)

document.querySelector('#btn-deleteall').addEventListener('click',()=>{
    let canteventos= listaevento.length
    for(let i=0; i<canteventos; i++){
        quitaevento()
    }
})



function agregar(){
    listaevento.push({
        nombre : document.querySelector('#input-evento').value,
        dia : document.querySelector('#input-dia').value,
        lugar : document.querySelector('#input-lugar').value
    })
    mostrar()
}

function mostrar(){
    let contenidotabla= document.querySelector('#cont-table')
    contenidotabla.innerHTML=''
    listaevento.forEach(evento =>{
        let tr= document.createElement('tr')

        let tdnombre= document.createElement('td')
        tdnombre.innerText= evento.nombre
        tr.appendChild(tdnombre)

        let tddia= document.createElement('td')
        tddia.innerText= evento.dia
        tr.appendChild(tddia)

        let tdlugar= document.createElement('td')
        tdlugar.innerText= evento.lugar
        tr.appendChild(tdlugar)

        contenidotabla.appendChild(tr)
    })
}

function quitaevento(){
    listaevento.pop()
    mostrar()
}
