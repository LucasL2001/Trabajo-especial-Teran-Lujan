'user strict'
let listaevento= []
document.querySelector('#btn-agregar').addEventListener('click', agregar)

function agregar(){
    listaevento.push({
        nombre : document.querySelector('#input-evento').value,
        dia : document.querySelector('#input-dia').value,
        lugar : document.querySelector('#input-lugar').value
    })
    mostrar()
}

document.querySelector('#btn-agregar3').addEventListener('click', ()=>{
    for(let i=0; i< 3; i++){
        agregar()
    }
})

function mostrar(){
    let tabla= document.querySelector('#cont-table')
    tabla.innerHTML=''
    let cuerpotabla= document.createElement('tbody')
    
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

        cuerpotabla.appendChild(tr)
    })

    tabla.appendChild(cuerpotabla)
    
}


document.querySelector('#btn-delete').addEventListener('click', ()=>{
    listaevento.pop()

    mostrar()
})
