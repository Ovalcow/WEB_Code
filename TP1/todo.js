let tasks = [
    { text: "Acheter un DLC", done: false },
    { text: "Rejoindre la communauté en ligne", done: false },
    { text: "Devenir accro au jeu", done: true }
];

function displayTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task' + (task.done ? ' done' : '');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.onchange = () => toggleDone(index);
        
        const text = document.createElement('span');
        text.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.onclick = () => deleteTask(index);
        
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(text);
        taskDiv.appendChild(deleteBtn);
        taskList.appendChild(taskDiv);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const text = newTaskInput.value.trim();
    if (text) {
        tasks.push({ text, done: false });
        newTaskInput.value = '';
        displayTasks();
    }
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function searchTasks() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = tasks.filter(task => task.text.toLowerCase().includes(query));
    displayTasks(filtered);
}

displayTasks();