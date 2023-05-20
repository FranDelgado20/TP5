class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1994 && this.nacimiento <= 2010:
        console.log("Gen Z");
        break;
      case this.nacimiento >= 1981 && this.nacimiento <= 1993:
        console.log("Gen Y");
        break;
      case this.nacimiento >= 1969 && this.nacimiento <= 1980:
        console.log("Gen X");
        break;
      case this.nacimiento >= 1949 && this.nacimiento <= 1968:
        console.log("Gen Baby Boom");
        break;
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        console.log("Gen Silent");
        break;
    }
  }
  esMayorDeEdad() {
    switch (true) {
      case this.edad >= 18:
        console.log("Eres mayor de edad");
        break;
      case this.edad < 18:
        console.log("Eres menor de edad");
        break;
    }
  }
  mostrarDatos() {
    console.log(
      this.nombre,
      this.edad,
      this.dni,
      this.sexo,
      this.peso,
      this.altura,
      this.nacimiento
    );
  }
}
const persona1 = new Persona(
  "Francisco",
  "20",
  "465465",
  "M",
  "80",
  "1,70",
  "2003"
);
const persona2 = new Persona();

const enviarDatos = () => {};
let form = document.getElementById("form");
form.addEventListener("submit", enviar);

function enviar(e) {
  e.preventDefault();
  let inputNombre = document.getElementById("inputNombre").value;
  let inputEdad = document.getElementById("inputEdad").value;
  let inputDni = document.getElementById("inputDni").value;
  let inputSexo = document.getElementById("inputSexo").value;
  let inputPeso = document.getElementById("inputPeso").value;
  let inputAltura = document.getElementById("inputAltura").value;
  let inputNac = document.getElementById("inputNac").value;
  const persona2 = new Persona(
    inputNombre,
    inputEdad,
    inputDni,
    inputSexo,
    inputPeso,
    inputAltura,
    inputNac
  );
//   persona2.mostrarDatos();
//   persona2.mostrarGeneracion();
//   persona2.esMayorDeEdad();
}

const mostrarLaGeneracion = () => {
    let inputNac = document.getElementById("inputNac").value;
  switch (true) {
    case inputNac >= 1994 && inputNac <= 2010:
      alert("Gen Z");
      break;
    case inputNac >= 1981 && inputNac <= 1993:
      alert("Gen Y");
      break;
    case inputNac >= 1969 && inputNac <= 1980:
      alert("Gen X");
      break;
    case inputNac >= 1949 && inputNac <= 1968:
      alert("Gen Baby Boom");
      break;
    case inputNac >= 1930 && inputNac <= 1948:
      alert("Gen Silent");
      break;
  }
 
};

const mostrarEdad = () => {
    let inputEdad = document.getElementById("inputEdad").value;
    if(inputEdad >= 18){
        alert(`Tienes ${inputEdad} años, eres mayor de edad`)
    }else{
        alert(`Tienes ${inputEdad} años, eres menor de edad`)
    }

}
