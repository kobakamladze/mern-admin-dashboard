import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

// import NavBar from '.';

const Layout = () => {
  const isMobile = !useMediaQuery('(min-width: 600px)');
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <Box display={isMobile ? 'block' : 'flex'} width="100%" height="100%">
      <SideBar
        isMobile={isMobile}
        drawerWidth="250px"
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Box>
        <NavBar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
