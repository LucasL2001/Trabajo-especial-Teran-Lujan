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
    const tr =document.createElement('tr')
    for(let i=0; i<listaevento.length;i++){
        tr.innerHTML= 
            `<td>${listaevento[i].nombre}</td>
            <td>${listaevento[i].dia}</td> 
            <td>${listaevento[i].lugar}</td>`
        tabla.appendChild(tr)
        }
}


document.querySelector('#btn-delete').addEventListener('click', ()=>{
    listaevento.pop()
    mostrar()
})
