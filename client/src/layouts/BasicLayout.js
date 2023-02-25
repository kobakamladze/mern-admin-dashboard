import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useGetUserQuery } from '../state/api/apiSlice';

// import NavBar from '.';

const Layout = () => {
  const isMobile = !useMediaQuery('(min-width: 600px)');
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const userId = useSelector(state => state.global.userId);
  const { data, isLoading } = useGetUserQuery(userId);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box display={isMobile ? 'block' : 'flex'} width="100%" height="100%">
      <SideBar
        user={data}
        isMobile={isMobile}
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Box flexGrow={1}>
        <NavBar
          user={data}
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
