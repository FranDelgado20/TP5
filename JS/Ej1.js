let input = document.getElementById("input");
let boton = document.getElementById("boton");
let numUsuario = 0;
let numBot = 0;
let vidas = document.getElementById("vidas");
let chances = 3
input.disabled = true;
boton.disabled = true;
const iniciarJuego = () => {
  numBot = Math.round(Math.random() * 99);
  console.log("El juego comenzo", numBot);
  input.disabled = false;
  boton.disabled = false;
};

input.addEventListener("input", (input) => {
  numUsuario = Number(input.target.value);
  console.log(numUsuario);
});

const enviar = () => {
  let numMayor =
    numBot > numUsuario
      ? "El numero del bot era mayor"
      : "El numero de la pc era mayor";

  numBot === numUsuario
    ? (alert("Ganaste"),
      (input.value = ""),
      (input.disabled = true),
      (boton.disabled = true))
    : (alert("Perdiste " + numMayor),
      (input.value = ""),
      (input.disabled = true),
      (boton.disabled = true),
      vidas.innerText = `Chances: ${--chances}` 
      );
      if(chances<=0){
        alert('NO TIENES MAS VIDAS')
      }

};
