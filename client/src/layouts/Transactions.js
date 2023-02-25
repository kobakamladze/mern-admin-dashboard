import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import LayoutTitle from '../components/LayoutTitle';
import { useGetTransactionsQuery } from '../state/api/apiSlice';

const Transactions = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTransactionsQuery({ page });

  if (isLoading) return <Box>Loading...</Box>;

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
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <LayoutTitle title="TRANSACTIONS" subtitle="See all transactions here" />

      <Box mt="1rem" height="80vh">
        <DataGrid
          isLoading={isLoading}
          getRowId={row => row._id}
          columns={columns}
          rows={data.products}
          rowCount={data.count || 0}
          page={page}
          paginationMode="server"
          onPageChange={newPage => setPage(newPage)}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
