import {Processor} from "./Processor.js";
import {Task} from "./Task.js";

var someTasks = [];
var timeProccess;

const containerInputData = document.querySelector('#input-data');
const containerVisual = document.querySelector('#visualization');
const btnReady = document.querySelector('#btn-ready');
const containerProccesator = document.querySelector('#proccesator');
const containerTask = document.querySelector('#task');
const errorModal = document.querySelector('#error');
const setTime = document.querySelector('#time-set');

const btnNext = document.querySelector('#next-task');
const btnSimulate =  document.querySelector('#simulate');

const storageTasks = document.querySelector('#tasks');

btnReady.addEventListener('click',e=>{
    e.preventDefault();
    let valueProcess = document.querySelector('#time-process');
    if(valueProcess.valueAsNumber){
        timeProccess = valueProcess.valueAsNumber;
        setTime.innerHTML = timeProccess + "s";
        containerProccesator.classList.add('hide');
        containerTask.classList.remove('hide');
    }else{
        const p = document.createElement('p');
        p.innerText = "Solo se aceptan numeros!";
        errorModal.appendChild(p);
        errorModal.classList.remove('hide');
        setTimeout(() => {
           errorModal.classList.add('hide'); 
           errorModal.removeChild(p);
           valueProcess.value = "";
        }, 2000);
    }
});

btnNext.addEventListener('click', e => {
    e.preventDefault();
    let nameTaskValue = document.querySelector('#name-task');
    let timeTaskValue = document.querySelector('#time-task');
    if(nameTaskValue.value && timeTaskValue.valueAsNumber){
        //Aqui se recibe los valores de la tarea
        let nameTask = nameTaskValue.value;
        let timeTaks = timeTaskValue.value;
        let id = new Date().getMilliseconds();

        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
        <i class="fa-regular fa-hourglass-half clock"></i>
        <p>${nameTask}</p>
        <b>${timeTaks}s<i class="fa-regular fa-clock"></i></b>`;
        storageTasks.appendChild(taskItem);

        let task = new Task(id,nameTask, timeTaks);
        someTasks.push(task);

        if(someTasks.length == 1){
            btnSimulate.classList.remove('hide');
        }

        nameTaskValue.value = "";
        timeTaskValue.value = "";
    }else{
        const p = document.createElement('p');
        p.innerText = "Campos obligatorios/formato no valido";
        errorModal.appendChild(p);
        errorModal.classList.remove('hide');
        setTimeout(() => {
           errorModal.classList.add('hide');
           errorModal.removeChild(p);
        }, 2000);
    }
});


btnSimulate.addEventListener('click',()=>{
    containerInputData.remove();
    containerVisual.classList.add('extended');
    const processor = new Processor(timeProccess, someTasks);
    processor.executeProcess();
});
//someTasks//Este variable es un arreglo que tiene las tareas
