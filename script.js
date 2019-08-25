let sliderOutput = document.querySelector('.range-slider--value');

document.querySelector('.range-slider--input').addEventListener('input', function(event) {
  sliderOutput.innerHTML = event.currentTarget.value;
});

var todoInput = document.querySelector('.todo--input');
var todoSubmit = document.querySelector('.todo--submit');
var todoList = document.querySelector('.todo--list');
var todoCheck = document.querySelector('.todo--list li');

console.log(todoCheck);

function createToDo() {
  if (todoInput.value === "") {
    return;
  }

  todoList.insertAdjacentHTML("beforeend", "<li>" + todoInput.value + "</li>")
  
  var newListItem = todoList.lastChild;
  
  newListItem.addEventListener("click", function () {
    // todoList.removeChild(newListItem);
    todoCheck.classList.add('todo--list--checked');
  })
  
  todoInput.value = "";
}

todoSubmit.addEventListener("click", function () {
  createToDo();
})

todoInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    createToDo();
  }
})