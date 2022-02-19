const todos_color = document.getElementsByTagName("li");
const array = [];

const CL= [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];


console.log(todos_color)

function changeColor(info) {
    const randomColor = Math.floor(Math.random()*CL.length);
    info.target.style = `color: ${CL[randomColor]}`;
}

function clearColor(info){
    console.dir(info);
    info.target.style = 'color:white';
}

function setup() {
    for (let item of todos_color) {
        array.push(item);
    }
    array.forEach(element =>
        element.addEventListener("mouseover", changeColor)
    );

    array.forEach(element =>
        element.addEventListener("mouseout", clearColor)
    );

}

setup();
