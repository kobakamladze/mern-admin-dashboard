import { Box } from '@mui/material';

import BreakdownChart from '../components/charts/BreakdownChart';
import PageLayout from '../layouts/PageLayout';

const Breakdown = () => {
  return (
    <PageLayout title="BREAKDOWN" subtitle="See chart of data here">
      <Box height="80vh" color="black">
        <BreakdownChart />
      </Box>
    </PageLayout>
  );
};

export default Breakdown;
