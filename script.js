const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');

const deleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    deleteAll.addEventListener('click', deleteAllItems);
}

function addNewItem(e) {
    if (input.value === "") {
        alert('add new item');
    }
    else {

        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-secondary';
        li.appendChild(document.createTextNode(input.value));
        const a = document.createElement('a');
        a.className = 'delete-item float-right';
        a.setAttribute('href', '#');
        a.innerHTML = '<i class="fas fa-times"></i>';

        li.appendChild(a);
        taskList.appendChild(li);

        input.value = '';
        console.log(li);
    }
}

function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
        e.preventDefault();
    }
}

function deleteAllItems(e) {
    if (confirm('are you sure')) {
        taskList.innerHTML = '';
    }

    e.preventDefault();
}