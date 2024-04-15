import { Typography } from '@mui/material';
import {AppView, AppLink} from '../components';

/**
 * Renders "Welcome" view
 * url: /
 * @page Welcome
 */
const WelcomeView = () => {
  console.log("WELCOME VIEW")
  return (
    <AppView>

      Mountain View
      <Typography variant="h4">Welcome to React App with MUI</Typography>


      <div>
        Take a look on samples of components at <AppLink to="/music">Music Page</AppLink>
      </div>
    </AppView>
  );
};

export default WelcomeView;
