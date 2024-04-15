import task_store from '../../store/task_store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function AddTask() {

    const [open, setOpen] = React.useState(false);
    const handleAddTask = () => {
      task_store.addTodo({title:'df', description:'dfdf', status:'Incomplete'})
      console.log(task_store.tasks)
    };


    return (
      <div >
        <Button onClick={handleAddTask}>Add Task</Button>
      </div>
    );
  }
  
