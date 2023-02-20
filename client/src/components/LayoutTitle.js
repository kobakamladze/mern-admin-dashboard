import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const LayoutTitle = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ color: theme.palette.secondary[100] }}
      >
        {title}
      </Typography>

      <Typography variant="h5" sx={{ color: theme.palette.secondary[300] }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default LayoutTitle;
