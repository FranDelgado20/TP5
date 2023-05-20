let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarTarea);
let divPadre = document.getElementById("divPadre");
let tareas = [];

// function agregarTarea(e) {
//   e.preventDefault();
//   let inputTarea = document.getElementById("inputTarea");
//   let tarea = inputTarea.value;
//   tareas.push(tarea);
//   console.log(tareas);

//   inputTarea.value = "";
// }
function agregarTarea(e) {
  e.preventDefault();
  let inputTarea = document.getElementById("inputTarea");
  tareas.push(inputTarea.value);
  localStorage.setItem("TAREAS", JSON.stringify(tareas));
  arrayLS = JSON.parse(localStorage.getItem("TAREAS"));
  console.log(arrayLS);
  divPadre.innerHTML = arrayLS.map((item) => {
    return `
    <div><ul><li>${item}</li></ul><div>
    `;
  });

  inputTarea.value = "";
}
const eliminarTarea = () => {
  const tareaElim = tareas.find(function (item, i) {
    if (item === inputTarea.value) {
      tareas.splice(i, 1);
      inputTarea.value = "";
    }
  });
  // tareas.forEach((item, i)=>{
  //     if(item === inputTarea.value){
  //       tareas.splice(i,1)
  //     }
  //     inputTarea.value= ''

  // })

  console.log(tareas);
};
