import { Box } from '@mui/material';
import { useEffect } from 'react';
import BreakdownChart from '../components/charts/BreakdownChart';

const Breakdown = () => {
  useEffect(() => {
    document.title = 'Breakdown';
  }, []);

  return (
    <Box height="80vh" color="black">
      <BreakdownChart />
    </Box>
  );
};

export default Breakdown;
