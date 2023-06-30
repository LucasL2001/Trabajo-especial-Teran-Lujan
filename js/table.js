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
    }
]
mostrar()

let btnagregar =  document.querySelector('#btn-agregar')

let btnagregar3 = document.querySelector('#btn-agregar3')

let btndelete = document.querySelector('#btn-delete')

let btndeleteall = document.querySelector('#btn-deleteall')

btnagregar.addEventListener('click', agregar)

btnagregar3.addEventListener('click', ()=>{
    for(let i=0; i< 3; i++){
        agregar()
    }
})

btndelete.addEventListener('click', quitaevento)

btndeleteall.addEventListener('click',()=>{
    let canteventos= listaevento.length
    for(let i=0; i<canteventos; i++){
        quitaevento()
    }
})



function agregar(){
    let nombre = document.querySelector('#input-evento').value

    let dia = document.querySelector('#input-dia').value

    let lugar = document.querySelector('#input-lugar').value
    
    if(nombre.trim() != "" && dia.trim() != "" && lugar.trim() != ""){
        listaevento.push({
            nombre : nombre,
            dia : dia,
            lugar : lugar
        })
    }
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
