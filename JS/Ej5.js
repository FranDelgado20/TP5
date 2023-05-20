let cronometro1
let cronometro = document.getElementById("cronometro");
let botonReinicio = document.getElementById('botonReinicio')
let min = 0
let seg = 0
botonReinicio.disabled = true
function iniciarCronometro (){
    cronometro1 = setInterval(actualizar, 1000)
    
}
function actualizar (){
    seg++
    if(seg === 60){
        seg = 0
        min++
    }
    actualizarDisplay()
}
function actualizarDisplay (){
    let displaySeg = seg < 10 ? '0' + seg : seg
    let displayMin = min < 10 ? '0' + min : min
    cronometro.textContent = displayMin + ':' + displaySeg
}

function pararCronometro (){
    clearInterval(cronometro1)
    botonReinicio.disabled = false

}
function reiniciarCronometro (){
    seg = 0
    min = 0
    actualizarDisplay()
    botonReinicio.disabled = true
}
