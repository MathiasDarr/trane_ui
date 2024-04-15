import { useCallback, useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import WelcomeView from '../views';
import MusicView from '../views/MusicView';
import TasksView from '../views/TaskView';
import PublicLayout from '../layout';
// import PublicRoutes from './PublicRoutes';
const AppRoutes = () => {


    return (
      <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/music" element={<MusicView />} />
          <Route path='/tasks' element={<TasksView />} />
        </Routes>
        </PublicLayout >
      </BrowserRouter>
    );
  };

  export default AppRoutes;