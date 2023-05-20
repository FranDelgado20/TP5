let tiempo 
let minutero = document.getElementById('minutero')
let min = 1
let seg = 3
function comenzar(){
    tiempo = setInterval(actualizar, 1000)
}
function actualizar(){
    seg--
    if(seg === 0){
        seg = 59
        min--
    }
    actualizarDisplay()
} 
function actualizarDisplay(){
    let minDisplay = min < 10 ? '0' + min : min
    let segDisplay = seg < 10 ? '0' + seg : seg
    minutero.textContent = minDisplay + ':' + segDisplay
}
function parar(){
    clearInterval(tiempo)
}
function reiniciar(){
    min = ''
    seg = ''
    actualizarDisplay()
}
