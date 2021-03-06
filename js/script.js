const dateNumber = document.getElementById('dateNumber');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const dateText = document.getElementById('dateText');

const taskContainer = document.getElementById('taskContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString('es', { day: 'numeric' });
    dateMonth.textContent = date.toLocaleDateString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleDateString('es', { year: 'numeric' });
    dateText.textContent = date.toLocaleDateString('es', { weekday: 'long' });
};

const addNewTask = (event) => {
    event.preventDefault()
    const { value } = event.target.taskText
    if(!value) return; 

    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.textContent = value;
    taskContainer.prepend(task);

    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'x'
    btnDelete.classList.add('btnDelete')
    task.appendChild(btnDelete)
    btnDelete.addEventListener('click', (e) => {
       const item = e.target.task;
       task.remove(item)
    })

    event.target.reset();

};


setDate();