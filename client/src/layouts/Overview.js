import { Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import LayoutTitle from '../components/LayoutTitle';
import OverviewChart from '../components/OverviewChart';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <Box m="1.5rem 2.5rem">
      <LayoutTitle title="OVERVIEW" subtitle="See overall stats here." />

      <Box height="80vh">
        <FormControl sx={{ mt: '1rem' }}>
          <Select
            value={view}
            label="view"
            onChange={e => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>

        <Box height="inherit" color="black">
          <OverviewChart view={view} setView={setView} />
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
