'user strict'
let listaevento= []
document.querySelector('#btn-agregar').addEventListener('click', agregar())

function agregar(){
    listaevento.push({
        evento : document.querySelector('#input-evento').value,
        dia : document.querySelector('#input-dia').value,
        lugar : document.querySelector('#input-lugar').value
    })
    console.log('puto')
    mostrar()
}

document.querySelector('#btn-agregar3').addEventListener('click', ()=>{
    for(let i=0; i< 3; i++){
        agregar()
    }
})

function mostrar(){
    document.querySelector('#cont-table').innerHTML= ''
    const contTabla = document.querySelector('#cont-table')
    const tabla= document.createElement('table')
    const encabezado = document.createElement('tr')
    for(let i in listaevento[0]){
        const celda= document.createElement('th')
        celda.textContent = i
        encabezado.appendChild(celda)
    }
    tabla.appendChild(encabezado)

    listaevento.forEach((evento)=>{
        const fila= document.createElement('tr')
        for(let pos in evento ){
            const celda=document.createElement('td')
            celda.textContent = evento[pos]
            fila.appendChild(celda)
        }

        tabla.appendChild(fila)

        contTabla.appendChild(tabla)
    })
}

document.querySelector('#btn-delete').addEventListener('click', ()=>{
    listaevento.pop()
    mostrar()
})
let medieval=[
    {
        "evento":"caballeros",
        "dia":"11/06",
        "lugar": "mar del plata",
    },
    {
        "evento":"zeus",
        "dia":"01/07",
        "lugar": "tucuman", 
    },
];
mostrar();