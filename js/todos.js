const toDoForm = document.querySelector("#todoinform");
const toDoList = document.querySelector(".todolist ul");
const toDoInput = document.querySelector("#todoinput");
const TODOS_KEY = "todos"

let todos = [];

function saveTodos(content) {
    const jsontodos = JSON.stringify(todos);
    localStorage.setItem(TODOS_KEY, jsontodos);
}



function deleteToDo(event) {
    const origin = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(origin.id));
    saveTodos();
    origin.remove();

}

function paintToDo(newTodoObj) {
    const tomato = document.createElement("li");
    const span = document.createElement("span");
    tomato.appendChild(span);
    tomato.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    tomato.addEventListener("dblclick", deleteToDo);
    toDoList.appendChild(tomato);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (todos.length < 4) {const newTodo = toDoInput.value;
        toDoInput.value = ""
        const newTodoObj = {
            text:newTodo,
            id: Date.now()
        };
        paintToDo(newTodoObj);
        todos.push(newTodoObj);
        saveTodos();
        setup()
    } else{
        alert("you cannnot add anymore!");
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    setup();
}