import React, { useState } from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from '../FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../../state';
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material';
// need to import profile image

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <IconButton onClick={() => console.log('Menu button clicked')}>
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
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
