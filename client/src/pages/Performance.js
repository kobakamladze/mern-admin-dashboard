import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { useGetUserPerformanceQuery } from '../state/api/apiSlice';
import PageLayout from '../layouts/PageLayout';

const Performance = () => {
  const userId = useSelector(state => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'user',
      headerName: 'User ID',
      flex: 1,
    },
    {
      field: 'products',
      headerName: '# of products',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
    },
  ];

  return (
    <PageLayout
      title="PERFORMANCE"
      subtitle="See user's performance here"
      isLoading={isLoading}
    >
      <Box m="1.5rem 0" height="80vh">
        <DataGrid
          loading={isLoading}
          getRowId={row => row._id}
          rows={data?.sales || []}
          columns={columns}
        />
      </Box>
    </PageLayout>
  );
};

export default Performance;
