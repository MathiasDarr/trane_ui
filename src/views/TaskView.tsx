import { Typography } from '@mui/material';
import {AppView} from '../components';
import { TaskList } from '../components/Tasks/TaskList';
import { TaskCard } from '../components/Tasks/TaskCard';
import task_store from '../store/task_store';
import AddTask from '../components/Tasks/AddTask';
import SimpleModal from '../SimpleModal';
import AppForm from '../components/AppForm';
import { observer } from 'mobx-react';
/**
 * Renders "Music" view
 * url: /
 * @page Tasks
 */
const TasksView = observer(() => {
  let task_components: React.ReactElement[] = [];
  task_store.tasks.forEach(task => {
    task_components.push(<TaskCard {... task} />)
  })
  
  return (
    <AppView>

      { <TaskList /> }
      { <AddTask/> }
    </AppView>
  );
});

export default TasksView;
