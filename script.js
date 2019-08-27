// Range slider



let sliderOutput = document.querySelector('.range-slider--value');

document.querySelector('.range-slider--input').addEventListener('input', function(event) {
  sliderOutput.innerHTML = event.currentTarget.value;
});



// To-do List


var todoInput = document.querySelector('.todo--input');
var todoSubmit = document.querySelector('.todo--submit');
var todoList = document.querySelector('.todo--list');
var todoCheck = document.querySelector('.todo--list li');

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



// Search



var searchItems = document.querySelectorAll('.search--item');

document.querySelector('.search--input').addEventListener('input', function (event) {
  for (var i = 0; i < searchItems.length; i++) {
    if (searchItems[i].innerHTML.includes(event.currentTarget.value)) {
      searchItems[i].style.display = 'list-item';
    } else {
      searchItems[i].style.display = 'none';
    }
  }
});