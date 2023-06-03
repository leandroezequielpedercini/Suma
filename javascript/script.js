// Label - Numero uno 
const labelNumeroUno = document.getElementById("labelNumeroUno")
labelNumeroUno.innerHTML = "Numero uno"

// Label numero dos
const labelNumeroDos = document.getElementById("labelNumeroDos")
labelNumeroDos.innerHTML = "Numero dos"

// Lavel resultado
let resultadoBtr = document.getElementById("resultado-btr")
resultadoBtr.innerHTML = "Resultado"

// Boton total
function total() {
    const inputUno = (document.getElementById("inputUno")).value 
    const inputDos = (document.getElementById("inputDos")).value
    const total = (document.getElementById("resultado")).value = Number(inputUno)+Number(inputDos) 
    }

 // Boton borrar
function borrar(){
formulario.reset("formulario")
}

