const tiempo = document.getElementById('tiempo')
const fecha = document.getElementById('fecha')

function reloj (){
 let x = new Date ()
 dia = x.getDate(),
 mes = x.getMonth()
 anio =  x.getFullYear()
 diaSemana = x.getDay()
 let timestring = x.toLocaleTimeString()
 tiempo.innerHTML = timestring
 fecha.innerHTML = `${anio}-${mes+1}-${dia}`
}
setInterval(() => {
    reloj()
}, 1000);
console.log()

let fechaa= new Date()
