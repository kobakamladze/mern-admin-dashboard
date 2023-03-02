import { Box } from '@mui/material';

import BreakdownChart from '../components/charts/BreakdownChart';
import TestLayout from '../layouts/PageLayout';

const Breakdown = () => {
  return (
    <TestLayout title="BREAKDOWN" subtitle="See chart of data here">
      <Box height="80vh">
        <BreakdownChart />
      </Box>
    </TestLayout>
  );
};

export default Breakdown;
