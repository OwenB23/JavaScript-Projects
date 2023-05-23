"use strict";

let owen = { name: "Owen", age: 25, city: "Sanford" };

let myJSON = JSON.stringify(owen);

document.getElementById("task").innerHTML = myJSON;

localStorage.setItem("lastname", "Bond");
let lastName = localStorage.getItem("lastname");

console.log(
  `${owen.name} ${lastName} is ${owen.age} years old and he lives in ${owen.city}, NC!`
);
function get_todos() {
  let todos = [];
  let todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  let task = document.getElementById("task").value;
  if (task === "") {
    alert("Plase enter a task to do!");
    return;
  }
  let todos = get_todos();
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));
  document.getElementById("task").value = "";
  show();
}

function remove() {
  let id = this.getAttribute("id");
  let todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
}

function show() {
  let todos = get_todos();
  let html = "<ul>";
  for (let i = 0; i < todos.length; i++) {
    html +=
      "<li>" +
      todos[i] +
      '<button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += "</ul>";
  document.getElementById("todos").innerHTML = html;

  let removeButtons = document.getElementsByClassName("remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", remove);
  }
}

document.getElementById("add").addEventListener("click", add);

document.getElementById("task").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add();
  }
});
show();

function dblFunction() {
  document.getElementById("paragraph").style.fontSize = "25px";
}
