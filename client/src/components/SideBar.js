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
// need to import profile image

const navItems = [
  { label: 'Dashboard', icon: <HomeOutlined /> },
  { label: 'Client facing', icon: null },
  { label: 'Products', icon: <ShoppingCartOutlined /> },
  { label: 'Customres', icon: <Groups2Outlined /> },
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

const SideBar = ({
  isMobile,
  drawerWidth,
  isSidebarOpened,
  setIsSidebarOpened,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeEndpoint, setActiveEndpoint] = useState('');

  useEffect(() => setActiveEndpoint(pathname.substring(1)), [pathname]);

  console.log(activeEndpoint);

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
              <FlexBetween>
                <Box display="felx">
                  <Typography variant="h4" fontWeight="bold">
                    TITLE-TEXT
                  </Typography>
                  {isMobile ? (
                    <IconButton
                      onClick={() => setIsSidebarOpened(false)}
                    ></IconButton>
                  ) : null}
                </Box>
              </FlexBetween>
              <List>
                {navItems.map(({ label, icon }) => {
                  const lowerCaseLabel = label.toLowerCase();

                  if (!icon)
                    return (
                      <Typography
                        key={crypto.randomUUID()}
                        sx={{ m: '2.25rem 0 1rem 3rem' }}
                      ></Typography>
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
            </Box>
          </Box>
        </Drawer>
      ) : null}
    </Box>
  );
};

export default SideBar;
