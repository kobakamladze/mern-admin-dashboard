import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import LayoutTitle from '../components/LayoutTitle';
import { useGetUserPerformanceQuery } from '../state/api/apiSlice';

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
    <Box m="1.5rem 2.5rem" height="80vh">
      <LayoutTitle title="PERFORMANCE" subtitle="See user's performance here" />

      <Box m="1.5rem 2.5rem" height="80vh">
        <DataGrid
          loading={isLoading}
          getRowId={row => row._id}
          rows={data?.sales || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Performance;
