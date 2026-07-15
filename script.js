// Retrieving from localStorage and initializing empty arrays/variables
let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoinput = document.getElementById("todoInput");
const todolist = document.getElementById("todolist");
const todocount = document.getElementById("todocount");
const addbtn = document.querySelector(".add-btn");
const deletebtn = document.querySelector(".delete-btn");

// Initialize the page and start listening
document.addEventListener("DOMContentLoaded", function () {
    addbtn.addEventListener("click", addtask);
    todoinput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addtask();
        }
    });
    deletebtn.addEventListener("click", deletealltasks);
    displaytasks();
});

function addtask() {
    const newtask = todoinput.value.trim();
    if(newtask !== "")
    {
        todo.push( {
            text:newtask,
            disabled:false,
        })
        savetolocalstorage();
        todoinput.value = "";
        displaytasks();
    }
}

function deletealltasks() {
}

function displaytasks() {

}

function savetolocalstorage() {
    localStorage.setItem("todo",JSON.stringify(todo));
}