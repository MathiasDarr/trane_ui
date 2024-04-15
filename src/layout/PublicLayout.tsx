import { FunctionComponent, PropsWithChildren, useCallback, useState } from 'react';
import { Stack } from '@mui/material/';
import { LinkToPage } from '../utils/type';
import { useNavigate } from 'react-router-dom';
import { BOTTOM_BAR_DESKTOP_VISIBLE, TOP_BAR_DESKTOP_HEIGHT, TOP_BAR_MOBILE_HEIGHT } from './config';
import AppIconButton from '../components/AppIconButton';
// TODO: change to your app name or other word

import BottomBar from './BottomBar/BottomBar';
import TopBar from './TopBar';
import SideBar from './SideBar';
/**
 * Renders "Public Layout" composition
 * @layout PublicLayout
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'About',
    path: '/',
    icon: 'signup',
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: 'signup',
  },
  {
    title: 'Music Library',
    path: '/music',
    icon: 'music',
  },
];

const BOTTOM_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Welcome',
    path: '/',
    icon: 'login',
  },
  {
    title: 'Music',
    path: '/music',
    icon: 'signup',
  },
];


const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  console.log("PUBLIC LAYOUT")
  
  const sidebarOpen =  true;
  const sidebarVariant = 'persistent';

  // Variant 2 - Sidebar is drawer on mobile and desktop
  // const sidebarOpen = sideBarVisible;
  // const sidebarVariant = 'temporary';
  const navigation = useNavigate();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const title = "Dakobed Bard";
  document.title = title; // Also Update Tab Title

  const onLogoClick = useCallback(() => {
    // Navigate to first SideBar's item or to '/' when clicking on Logo/Menu icon when SideBar is already visible
    navigation(SIDE_BAR_ITEMS?.[0]?.path || '/');
  }, [navigation]);

  const onSideBarOpen = () => {
    if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
  };

  const onSideBarClose = () => {
    if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
  };

  
  return (
    <Stack>    

        <Stack component="header">
          <TopBar
          startNode={<AppIconButton icon="logo" onClick={sidebarOpen ? onLogoClick : onSideBarOpen} />}
          title={title}
        />
        <SideBar
          anchor="left"
          open={sidebarOpen}
          variant={sidebarVariant}
          items={SIDE_BAR_ITEMS}
          onClose={onSideBarClose}
        />

        </Stack>
          <Stack
            component="main"
            sx={{
              flexGrow: 1, // Takes all possible space
              padding: 1,
            }}
          >
            {children}
          </Stack>

          {/* <Stack component="footer">{ <BottomBar items={BOTTOM_BAR_ITEMS} />}</Stack> */}
    </Stack>
  )
}

export default PublicLayout;
