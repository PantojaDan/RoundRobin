import {Processor} from "./Processor.js";
import {Task} from "./Task.js";
import {setTasks} from "./setTasks.js";

const timeAssigned = prompt("Set the time for processor: ");
const tasks = setTasks();


const processor = new Processor(timeAssigned, tasks);



processor.executeProcess();