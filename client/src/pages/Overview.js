import { useState } from 'react';
import { Box, MenuItem, Select, FormControl } from '@mui/material';

import OverviewChart from '../components/charts/OverviewChart';
import PageLayout from '../layouts/PageLayout';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <PageLayout title="OVERVIEW" subtitle="See overall stats here">
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
    </PageLayout>
  );
};

export default Overview;
