import { useState, useCallback, FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

import {
  SIDE_BAR_DESKTOP_ANCHOR,
  SIDE_BAR_MOBILE_ANCHOR,
  SIDE_BAR_WIDTH,
  TOP_BAR_DESKTOP_HEIGHT,
  TOP_BAR_MOBILE_HEIGHT,
} from './config';


// TODO: change to your app name or other word
const TITLE_PRIVATE = '_TITLE_ app'; // Title for pages after authentication

/**
 * SideBar navigation items with links
 */


/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  console.log("PrIVATER LAYOUT")
  const navigation = useNavigate();


  // Variant 2 - Sidebar is drawer on mobile and desktop
  // const sidebarOpen = sideBarVisible;
  // const sidebarVariant = 'temporary';

  const title = TITLE_PRIVATE;
  document.title = title; // Also Update Tab Title


  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh', // Full screen height
        paddingTop: TOP_BAR_DESKTOP_HEIGHT,
        paddingLeft: 0,
        paddingRight: 0,

        // paddingLeft: sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes('left') ? SIDE_BAR_WIDTH : 0,
        // paddingRight: sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes('right') ? SIDE_BAR_WIDTH : 0,
      }}
    >

    </Stack>
  );
};

export default PrivateLayout;
