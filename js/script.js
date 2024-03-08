// TO_DO_APP v1.0.0
// 2024-03-08

let listaTareas = []

const htmlPendiente = document.getElementById("pendiente")
const htmlEjecucion = document.getElementById("ejecucion")
const htmlFinalizada = document.getElementById("finalizada")


let formulario = document.getElementById("form")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("Soy el formulario")
    // Esta es una manera de obtener el valor del input
    // const descripcion = document.getElementById("descripcion").value

    // Esta es otra manera de obtener el valor del input desde el formulario
    // const descripcion = formulario[0].value

    const tarea = new Object()
    tarea.id = new Date().getTime()
    tarea.descripcion = formulario[0].value
    tarea.estado = "pendiente"

    listaTareas.push(tarea)

    formulario.reset()     //.reset() funcion del programa para borrar los datos
    formulario[0].focus()  //.focus() funcion del programa para mantener el focus

    mostrarTareas()

    // console.log(listaTareas)
})

function mostrarTareas() {
    let tareaPendiente = ""
    let tareaEjecucion = ""
    let tareaFinalizada = ""

    for (let i = 0; i < listaTareas.length; i++) {
        switch (listaTareas[i].estado) {
            case "pendiente":

                tareaPendiente += `<div class="lista-tareas tarea-pendiente">`
                tareaPendiente += `<p id="${listaTareas[i].id}">${listaTareas[i].descripcion}</p><p>`
                tareaPendiente += `<span class="boton boton-finalizada onclick="cambiarEstado(${listaTareas[i].id}, 'finalizada')">`
                tareaPendiente += `<i class="fa-solid fa-circle-check"></i></span>`
                tareaPendiente += `<span class="boton boton-borrado" onclick="borrarTarea(${listaTareas[i].id})">`   
                tareaPendiente += `<i class="fa-solid fa-trash-can"></i></span>`  
                tareaPendiente += `<span class="boton boton-ejecucion" onclick="cambiarEstado(${listaTareas[i].id}, 'ejecucion')">`
                tareaPendiente += `<i class="fa-solid fa-person-digging"></i></span>`  
                tareaPendiente += `<span class="boton boton-pendiente" onclick="cambiarEstado(${listaTareas[i].id}, 'pendiente')">`
                tareaPendiente += `<i class="fa-solid fa-clipboard-list"></i></span>`     
                tareaPendiente += `</p></div>`

                console.log("Es una tarea pendiente")
                break
            case "ejecucion":
                console.log("Es una tarea en ejecución")

                break
            case "finalizada":
                console.log("Es una tarea finalizada")

                break
        }
    }

    htmlPendiente.innerHTML = tareaPendiente
}

const cambiarEstado = (id, estado) => {
    console.log(id, estado)
}



/*
function solucion1() {
    alert("Soy un onclick desde HTML")
}

document.getElementById("id2").onclick = () => alert("Soy un onclick desde JS")

document.getElementById("id3").addEventListener("click", () => alert("Soy un eventListener de JS"))
*/

