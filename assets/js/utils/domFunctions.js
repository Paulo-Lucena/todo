

export function addTask(db,title = ""){
    const task = document.createElement("div"); //cria uma tag
    //const id = Number(db.length) + 1;
    task.classList.add("task"); //adiciona uma classe
    task.setAttribute("id",db.id); //adiciona um atributo do tipo ID

    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}" />
    </div>
    <div>
        <div>
        <span class="title-task">${title ? title : db.title} </span>
        </div>
        <div>
            Star
        </div>`;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}

export function removeTask(){
    alert('removeTask');
}

export function updateTask(){
    alert('updateTask');
}

export function getAllTasks(db){
    db.forEach((task) => {
        addTask(task);
    });  
}

export function getTaskById(){
    alert('getTaskById');
}