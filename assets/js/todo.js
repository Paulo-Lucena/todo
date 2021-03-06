import { addTask, getAllTasks } from "./utils/domFunctions.js";

const db = [

    { 
        id: 1,
        title:'Concluir o curso de JavaScript',
        steps: [
            {step: 'Ajustar Textos'},
            {step: 'Ajustar imagens'},
            {step: 'Ajustar Expor'},
            {step: 'Ajustar Store Connect'},
        ],
        done: false,
        dueDate: '2022-05-30',
        reminder: '2020-05-20 10:00',
    },

    {
        id: 2,
        title:'Concluir o curso de React',
        steps: [
            {step: 'Ajustar Textos'},
            {step: 'Ajustar imagens'},
            {step: 'Ajustar Expor'},
            {step: 'Ajustar Store Connect'},
        ],
        done: true,
        dueDate: '2022-03-30',
    },


];

getAllTasks(db);

// console.log(db[0].title);

const form = document.querySelector('#addNewTask');
const newTask = document.querySelector('#inputTxtNewTask');
form.addEventListener("submit",(e) => {
    e.preventDefault();
});

newTask.addEventListener('keyup', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(e.key =='Enter'){
        if(!newTask.value){
            alert('[ERRO] - Digite algo');
        } else {
            const d = new Date();
            const today = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

        db.push({id: Number(db.length) + 1, title: newTask.value, done: false, dueDate: today});
        document.querySelector(".tasks").innerHTML = '';
        getAllTasks(db);
        newTask.value = '';
        console.log(db);
        }
    }
});