import { TaskCard } from "./TaskCard";
import task_store from '../../store/task_store';
import axios from 'axios'
import React from "react";
import { useState, useEffect } from "react";
import { typeOf } from "maplibre-gl";

async function fetch_tasks() {
    const res = await axios.get('http://localhost:8080/tasks', {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.data
    
}
  

type Task = {
    title: string,
    description: string,
    status: string,
}

export function TaskList() {
    
    
    const [tasks, setTaskResponse] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8080/tasks', {
            headers: { 'Content-Type': 'application/json' }
          }).then((response) => {
            let  tasks_ = response.data.map((task: Task) => <TaskCard {... task} />);
            setTaskResponse(tasks_);
          });
    }, [])
    let tasks1 = [];
    var data = fetch_tasks();
    
    return (
        <div>
            {tasks}
        </div>
    )
}