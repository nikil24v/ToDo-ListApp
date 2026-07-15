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
    todo = [];
    savetolocalstorage();
    displaytasks();
}

function displaytasks() {

    todolist.innerHTML = "";
    todo.forEach((item,index) => {
        const p = document.createElement("div");
        p.innerHTML = `
            <div class="todo-container">
                <input type="checkbox" class="todo-checkbox" id="input=${index}" ${item.disabled ? "checked" : ""}>
                <p id="todo-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editTask(${index})">
                ${item.text}
                </p>
            </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener("change", () => {
            toggletask(index);
        });
        todolist.appendChild(p);
    });
    todocount.textContent = todo.length;
}

function editTask(index) {
    const todoitem = document.getElementById(`todo-${index}`);
    const existingText = todo[index].text;
    const inputElement = document.createElement("input");
    
    inputElement.value = existingText;
    todoitem.replaceWith(inputElement);
    inputElement.focus();

    inputElement.addEventListener("blur" , function() {
        const updatedText = inputElement.value.trim();
        if(updatedText)
        {
            todo[index].text = updatedText;
            savetolocalstorage();
        }
        displaytasks();
    });
}

function toggletask(index) {
    todo[index].disabled = !todo[index].disabled;
    savetolocalstorage();
    displaytasks();
}


function savetolocalstorage() {
    localStorage.setItem("todo",JSON.stringify(todo));
}