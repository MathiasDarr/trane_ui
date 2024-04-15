import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../layout';
import WelcomeView from '../views';
import MusicView from '../views/MusicView';
/**
 * List of routes available for anonymous users
 * Also renders the "Public Layout" composition
 * @routes PublicRoutes
 */
const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/music" element={<MusicView />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
