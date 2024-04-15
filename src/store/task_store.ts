import { makeObservable, action, observable, computed, makeAutoObservable } from "mobx";


type Task = {
    title: string,
    description: string,
    status: string,
}


class TaskStore {
    tasks: Array<Task> = [{
        title: "Be Better",
        description: "PLZ",
        status: "Incomplete"
    },
    {
        title:'Fail at everything', 
        description: "Be a degenerate",
        status:'Complete',
    }
];
    constructor(){
        makeObservable(this, {
            tasks: observable
        })
    }
    addTodo(task: Task){
        this.tasks.push(task)
    }
}


const task_store = new TaskStore();
export default task_store;
