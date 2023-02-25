import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from '@mui/icons-material';

import FlexBetween from './FlexBetween';
import profilePic from '../assets/profile_pic.webp';
// need to import profile image

const navItems = [
  { label: 'Dashboard', icon: <HomeOutlined /> },
  { label: 'Client facing', icon: null },
  { label: 'Products', icon: <ShoppingCartOutlined /> },
  { label: 'Customers', icon: <Groups2Outlined /> },
  { label: 'Transactions', icon: <ReceiptLongOutlined /> },
  { label: 'Geography', icon: <PublicOutlined /> },
  { label: 'Sales', icon: null },
  { label: 'Overview', icon: <PointOfSaleOutlined /> },
  { label: 'Daily', icon: <TodayOutlined /> },
  { label: 'Monthly', icon: <CalendarMonthOutlined /> },
  { label: 'Breakdown', icon: <PieChartOutlined /> },
  { label: 'Managment', icon: null },
  { label: 'Admin', icon: <AdminPanelSettingsOutlined /> },
  { label: 'Performance', icon: <TrendingUpOutlined /> },
];

// Styled list of navigation items for side bar
const NavigationList = ({ navItems, activeEndpoint, setActiveEndpoint }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <List>
      {navItems.map(({ label, icon }) => {
        const lowerCaseLabel = label.toLowerCase();

        if (!icon)
          return (
            <Typography
              key={crypto.randomUUID()}
              sx={{ m: '2rem 0 0.8rem 1rem' }}
            >
              {label}
            </Typography>
          );

        return (
          <ListItem key={crypto.randomUUID()} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(`/${lowerCaseLabel}`);
                setActiveEndpoint(lowerCaseLabel);
              }}
              sx={{
                backgroundColor:
                  activeEndpoint === lowerCaseLabel
                    ? theme.palette.secondary[300]
                    : 'transparent',
                color:
                  activeEndpoint === lowerCaseLabel
                    ? theme.palette.primary[600]
                    : theme.palette.secondary[200],
              }}
            >
              <ListItemIcon
                sx={{
                  ml: '2 rem',
                  color:
                    activeEndpoint === lowerCaseLabel
                      ? theme.palette.primary[600]
                      : theme.palette.secondary[200],
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={label}>
                {activeEndpoint === lowerCaseLabel ? (
                  <ChevronRightOutlined sx={{ ml: 'auto' }} />
                ) : null}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

// Small component to display user info in side bar
const UserInfoComponent = ({ user, theme }) => {
  return (
    <Box position="absolute" bottom="2rem" width="100%">
      <Divider />
      <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
        <Box
          component="img"
          src={profilePic}
          alt="ptofile"
          height="40px"
          width="40px"
          borderRadius="50%"
          sc={{ objectFit: 'cover' }}
        />

        <Box textAlign="left">
          <Typography fontWeight="bold" color={theme.palette.secondary[100]}>
            {user.name}
          </Typography>
        </Box>

        <SettingsOutlined
          sx={{
            fontSize: '25px',
            color: theme.palette.secondary[300],
            cursor: 'pointer',
          }}
        />
      </FlexBetween>
    </Box>
  );
};

const SideBar = ({ user, isMobile, isSidebarOpened, setIsSidebarOpened }) => {
  const { pathname } = useLocation();
  const [activeEndpoint, setActiveEndpoint] = useState('');
  const theme = useTheme();

  useEffect(() => setActiveEndpoint(pathname.substring(1)), [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpened ? (
        <Drawer
          open={isSidebarOpened}
          onClose={() => setIsSidebarOpened(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: '250px',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '250px',
            },
          }}
        >
          <Box width="100%">
            <Box m="1.rem 2rem 2rem 3rem">
              <Box textAlign="center" gap="0.5rem">
                <Typography variant="h4" fontWeight="bold" p="1rem">
                  TITLE-TEXT
                </Typography>
                {isMobile ? (
                  <IconButton
                    onClick={() => setIsSidebarOpened(false)}
                  ></IconButton>
                ) : null}
              </Box>

              <NavigationList
                theme={theme}
                navItems={navItems}
                activeEndpoint={activeEndpoint}
                setActiveEndpoint={setActiveEndpoint}
              />
            </Box>
          </Box>

          <UserInfoComponent user={user} theme={theme} />
        </Drawer>
      ) : null}
    </Box>
  );
};

export default SideBar;
