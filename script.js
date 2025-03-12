const tasks = [];

document.getElementById('task_input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addarray();
    }
});

function addarray() {
    const task = document.getElementById('task_input').value;
    if(task){
        const newtask = {
            task_name: task,
            completed: false
        }
        tasks.push(newtask);
        document.getElementById('task_input').value = '';
        renderTasks();
        console.log(tasks);
    } else {
        alert('Please enter a task');
    }
}

function renderTasks(){
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.id = `task-${index}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.classList.add('custom-checkbox');
        checkbox.addEventListener('change', () => completedtask(index));

        const taskName = document.createElement('span');
        taskName.textContent = task.task_name;
        taskName.id = `task-name-${index}`;
        
        if (task.completed) {
            taskName.classList.add('strike-through');
        }

        const delbtn = document.createElement('button');
        const delImg = document.createElement('img');
        delImg.src = 'bin.png'; 
        delImg.alt = 'Delete Task';
        delImg.style.width = '20px'; 
        delImg.style.height = '20px'; 
        delbtn.appendChild(delImg); 
        delbtn.onclick = () => deletetask(index);

        li.appendChild(checkbox);
        li.appendChild(taskName);
        li.appendChild(delbtn);
        tasklist.appendChild(li);
    });
}

function deletetask(index) {
    const listItem = document.getElementById(`task-${index}`);
    if (listItem) {
        listItem.classList.add('fade-out');
        
        setTimeout(() => {
            tasks.splice(index, 1);
            renderTasks();
        }, 500);
    } else {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function completedtask(index) {
    const listItem = document.getElementById(`task-${index}`);
    tasks[index].completed = true;
    listItem.classList.toggle('strike-through');
}
function resetarray() {
    tasks.length = 0; 
    renderTasks(); 
}
const text = "created by tharagaraman";
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); 
    } else {

        setTimeout(() => {
            typewriterElement.textContent = ''; 
            index = 0; 
            typeWriter(); 
        }, 2000); 
    }
}

typeWriter();