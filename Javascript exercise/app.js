const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addItem); 
todoList.addEventListener('click', deleteItem);
filterOption.addEventListener('click', filterTodo);


function addItem(e) {
    e.preventDefault(); // evita che quando si clicchi il tasto, si ricarichi la pagina
    // div
    const todoDiv = document.createElement('div'); // crea un div
    todoDiv.classList.add('todo'); // aggiunge una classe al div
    // crea un list item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); // inserisce l'elemento della lista dentro al div
    // Add TODO to Local Storage
    saveLocalTodos(todoInput.value);
    // Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);
    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);
    // Append to list
    todoList.appendChild(todoDiv);

    todoInput.value = ''; // per pulire l'input.
}

function deleteItem(e) {
    const item = e.target; // il pulsante delete

    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement; // rimuove il genitore di item
        todo.classList.add('fall');
        removeLocalTodo(todo);
        // todo.remove();
        todo.addEventListener('transitioned', function(){
            todo.remove();
        })
    }

    if (item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
            break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
            break;
                case 'uncompleted':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
            break;
        }
    })
}

// per salvare i dati

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodos() {
    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div'); // crea un div
        todoDiv.classList.add('todo'); // aggiunge una classe al div
        // crea un list item
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; 
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo); // inserisce l'elemento della lista dentro al div

        // Complete button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add('completed-button');
        todoDiv.appendChild(completedButton);
        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add('delete-button');
        todoDiv.appendChild(deleteButton);
        // Append to list
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodo(todo) {
    let todos; 
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}


// animation 1

function magicText() {
    const textContainer = document.querySelector('.text-cntr');
    const textDistance = textContainer.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 2;

    if(textDistance < screenHeight) {
        textContainer.classList.add('text-magic');
    }
}

window.addEventListener('scroll', magicText);


// pika animation

function slideIn() {
    const pikaContainer = document.querySelector('.pika-animation');
    const textDistance = pikaContainer.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 2;

    if(textDistance < screenHeight) {
        pikaContainer.classList.add('pika-lastposition');
    }
}

window.addEventListener('scroll', slideIn);