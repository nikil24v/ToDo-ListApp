//retruieving from the local storage 
//And intializing empty arrays and variables 

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoinput = document.getElementById("todoInput");
const todolist = document.getElementById("todolist");
const todocount = document.getElementById("todocount");
const addbtn = document.querySelector(".add-btn");
const deletebtn = document.querySelector(".delete-btn");


//intialize the page and starts listining

document.addEventListener("DOMContentLoaded", function() {
    addbtn.addEventListener("click", addtask());
    todoinput.addEventListener("keydown", function(event){
        if(event.key === "Enter") {
            event.preventDefault();
            addtask();
        }
    });
    deletebtn.addEventListener("click",deletealltasks());
    displaytasks();
});

function addtask() {
    
}

function deletealltasks() {

}

function displaytasks() {
    
}