// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
//Functions

function addTodo(event){
    event.preventDefault();
   
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // CHECK MARK BUTTON
        const completedButton  = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('completed-btn')
        todoDiv.appendChild(completedButton);
        //TRASH BUTTON

        const trashbutton  = document.createElement('button')
        trashbutton.innerHTML = '<i class="fas fa-trash"></i>'
        trashbutton.classList.add('trash-btn')
        todoDiv.appendChild(trashbutton);

        // Append to list

        todoList.appendChild(todoDiv)
        todoInput.value = ""

}
function deleteCheck(event){
    const item = event.target;

    if(item.classList[0] === 'trash-btn'){
        let todo = item.parentElement;
            todo.remove();
    }
    
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}

