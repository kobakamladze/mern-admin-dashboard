import React, { useState } from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../state/globalSlice';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import profilePic from '../assets/profile_pic.webp';

// Small component to display user info in nav bar
const UserInfoComponent = ({ user, theme }) => {
  return (
    <Box width="100%">
      <FlexBetween textTransform="none" gap="1rem">
        <Box
          component="img"
          src={profilePic}
          alt="ptofile"
          height="32px"
          width="32px"
          borderRadius="50%"
          sc={{ objectFit: 'cover' }}
        />

        <Box textAlign="left">
          <Typography fontWeight="bold" color={theme.palette.secondary[100]}>
            {user.name}
          </Typography>
        </Box>
      </FlexBetween>
    </Box>
  );
};

const NavBar = ({ user, isSidebarOpened, setIsSidebarOpened }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{ position: 'static' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpened(!isSidebarOpened)}>
            <MenuIcon />
          </IconButton>

          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Type to search" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>

          <UserInfoComponent user={user} theme={theme} />
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
