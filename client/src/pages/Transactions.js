import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

import { useGetTransactionsQuery } from '../state/api/apiSlice';
import PageLayout from '../layouts/PageLayout';

const Transactions = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTransactionsQuery({ page });

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
    <PageLayout
      title="TRANSACTIONS"
      subtitle="See all transactions here"
      isLoading={isLoading}
    >
      <Box height="80vh">
        <DataGrid
          loading={isLoading}
          getRowId={row => row._id}
          columns={columns}
          rows={data?.products}
          rowCount={data?.count || 0}
          page={page}
          paginationMode="server"
          onPageChange={newPage => setPage(newPage)}
        />
      </Box>
    </PageLayout>
  );
};

export default Transactions;
