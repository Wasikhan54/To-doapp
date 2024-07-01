// const todoInput = document.querySelector('.todo-input')
// const addButton = document.querySelector('.add-todo-button')
// const deleteButtton = document.querySelector('.delete-todo-button')
// const todoList = document.querySelector('.todo_list')
// addButton.addEventListener('click', function (){

//     if(!todoInput.value)return alert('bhai sab input fill karu')
//         var list = `<li class="list_item"> <span> ${todoInput.value} </span> <button onclick="editfun(this)">Edit</button> <button onclick="delfun(this)">Del</button> </li>  `
//     todoList.innerHTML  += list
//     todoInput.value = ""
// } )
//  function editfun(element){
//     console.log('cchl ya' ,element.previousElementSibling)

//     var previousValue = element.previousElementSibling.innerText
//     var update = prompt( 'edit',previousValue)
//     element.previousElementSibling.innerText = update
//  }
//  function delfun(element){
//     element.parentElement.remove()
//  }
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-todo-button');
const deleteButton = document.querySelector('.delete-todo-button');
const todoList = document.querySelector('.todo_list');

addButton.addEventListener('click', function () {
    if (!todoInput.value) return alert('Please fill the input');
    var list = `<li class="list_item"> <span> ${todoInput.value} </span> <button onclick="editfun(this)">Edit</button> <button onclick="delfun(this)">Clear Item</button> </li>`;
    todoList.innerHTML += list;
    todoInput.value = "";
});

deleteButton.addEventListener('click', function () {
    todoList.innerHTML = "";
});

function editfun(element) {
    var previousValue = element.previousElementSibling.innerText;
    var update = prompt('Edit', previousValue);
    if (update) {
        element.previousElementSibling.innerText = update;
    }
}

function delfun(element) {
    element.parentElement.remove();
}
