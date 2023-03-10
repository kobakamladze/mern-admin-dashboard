import FlexBetween from '../components/FlexBetween';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetDashboardDataQuery } from '../state/api/apiSlice';
import BreakdownChart from '../components/charts/BreakdownChart';
import OverviewChart from '../components/charts/OverviewChart';
import PageLayout from '../layouts/PageLayout';

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

const Dashboard = () => {
  const theme = useTheme();

  const isNotMMediumScreen = useMediaQuery('(min-width: 1200px)');
  const { data, isLoading } = useGetDashboardDataQuery();

  const columns = [
    {
      field: '_id',
      headerNName: 'ID',
      flex: 1,
    },
    {
      field: 'user',
      headerNName: 'user',
      flex: 1,
    },
    {
      field: 'products',
      headerNName: 'Products amount',
      flex: 0.5,
      renderCell: params => params.value.length,
    },
    {
      field: 'cost',
      headerNName: 'Cost',
      flex: 1,
    },
  ];

  return (
    <PageLayout title="DASHBOARD" subtitle="Welcome to dashboard">
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNotMMediumScreen ? null : 'span 12' },
        }}
      >
        <StatBox
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
        />
        <StatBox
          title="Sales Today"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          p="1rem"
          borderRadius="0.55rem"
          color="black"
          backgroundColor={theme.palette.background.alt}
        >
          <OverviewChart view="sales" />
        </Box>
        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last month"
        />

        <Box gridColumn="span 8" gridRow="span 3">
          <DataGrid
            loading={isLoading || !data}
            getRowId={row => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          p="1.5rem"
          borderRadius="0.55rem"
          color="black"
        >
          <Typography variant="h6" color="white">
            Sales By Category
          </Typography>
          <BreakdownChart />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Dashboard;
