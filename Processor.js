const containerFinished = document.querySelector('#finished');

export class Processor
{
    constructor(timeAssigned, tasks)
    {
        this.timeAssigned = parseInt(timeAssigned);
        this.tasks = tasks;
    }

    showTask(task){
        let taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <i class="fa-regular fa-circle-check done"></i>
            <p>${task.description}</p>
            <b>${task.time}s<i class="fa-regular fa-clock"></i></b>
        `;
        setTimeout(() => {
            containerFinished.appendChild(taskItem);
        }, 1000);
        //console.log(task.description);
    }

    executeProcess()
    {
        while(this.tasks.length != 0)
        {
            this.tasks.forEach(task => {
                
                if(task.time <= this.timeAssigned)
                {   
                    task.time = 0;
                    this.showTask(task);//Mostrar esa tarea que ya termino

                    this.tasks = this.tasks.filter(_task => _task.id != task.id);

                }
                else
                {
                    task.time -= this.timeAssigned;
                }
            });
        }
    }

}