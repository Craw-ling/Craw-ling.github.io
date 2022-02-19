const nameInput = document.querySelector("#nameInput");
const nameOutput = document.querySelector("#userOutput");
const nameSubmit = document.querySelector("#userSubmit");
const USER_NAME = "username";
const storagedName = localStorage.getItem(USER_NAME);

const todoInput = document.querySelector(".todoinput");
const todoList = document.querySelector(".todolist");

function cycle(info) {
    console.log("hello!")
    info.preventDefault();
    const name = nameInput.value;
    localStorage.setItem(USER_NAME, name);
    nameOutput.innerText = `Hello, ${name}`;
    nameInput.classList.add("hidden");
    nameOutput.classList.remove("hidden");
    todoInput.classList.remove("hidden");
    todoList.classList.remove("hidden");
}

nameSubmit.addEventListener("submit", cycle)

if (storagedName){
    nameOutput.innerText = `Hello, ${storagedName}`;
    nameInput.classList.add("hidden");
    nameOutput.classList.remove("hidden");
    todoInput.classList.remove("hidden");
    todoList.classList.remove("hidden");
} else{
    nameInput.classList.remove("hidden");
    nameOutput.classList.add("hidden");
    todoInput.classList.add("hidden");
    todoList.classList.add("hidden");
}
