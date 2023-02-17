import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

// import NavBar from '.';

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
