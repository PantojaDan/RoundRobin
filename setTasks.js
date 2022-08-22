import {Task} from "./Task.js";

export function setTasks(){
    let tasksSet = [];

    const amountTasks = prompt("How many tasks you're going to do?: ");
    
    for(let i = 1; i <= amountTasks; i++){
        const description = prompt("Task's name:");
        const time = parseInt(prompt("How much time require this task?: "));
        console.log(time);
        const task = new Task(i,description, time);
        tasksSet.push(task);
    }


    return tasksSet;
}