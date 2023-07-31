const ingresarTarea = document.querySelector("#input-tareas");
const agregarTarea = document.querySelector("#btn-agregar-tareas");
const listaTarea = document.querySelector("#lista-tareas");
const borrarTodasTareas = document.querySelector("#borrar-todas-tareas");


let taskList = JSON.parse(localStorage.getItem("task")) || [] ;

const guardarLocalStorage =() => {
    localStorage.setItem("task", JSON.stringify(taskList))
};

const createTask = (task) => {
    const {name, id} = task

    return `
    <li>${name}<img class="tacho-basura" src="/imagenes/tacho-de-basura.png" alt="boton de borrar" data-id="${id}"></li>`
};

const renderTask =() => {

    listaTarea.innerHTML = taskList.map((task) => createTask(task).join(" "));

}

const deleteAll =() => {
    if (!taskList.length) {
        borrarTodasTareas.classList.add("hidden")
        return;
    }
    borrarTodasTareas.classList.remove("hidden")
};

const valorInput =() => {
  ingresarTarea.value.trim().replace(" ");
}
