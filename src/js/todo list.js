const toDoForm = document.querySelector('#todo_form');
const toDoList = document.querySelector('#todo_list');
const toDoInput = document.querySelector('#todo_form input');

const toDosKey = 'todos';

let toDos = [];

const saveToDos = function(){
    localStorage.setItem(toDosKey, JSON.stringify(toDos))
}

const deleteToDo = function(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDos();
}

const createToDo = function(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.textContent = newTodo.text;
    const button = document.createElement('button');
    button.textContent = '✖';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

const handleToDoSubmit = function(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    createToDo(newTodoObj);
    saveToDos();
};


toDoForm.addEventListener('submit', handleToDoSubmit);

const sayHello = function(item){
    console.log(item)
}

const savedToDos = localStorage.getItem(toDosKey)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(createToDo);
}
