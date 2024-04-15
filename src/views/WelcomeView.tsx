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

      WELCOME VIEW
      <Typography variant="h4">Welcome to React App with MUI</Typography>

      <div>This is Welcome page, put your content here....</div>
      <div>
        Take a look on samples of components at <AppLink to="/music">Music Page</AppLink>
      </div>
    </AppView>
  );
};

export default WelcomeView;
