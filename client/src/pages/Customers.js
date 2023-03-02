import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetCustomersQuery } from '../state/api/apiSlice';
import TestLayout from '../layouts/PageLayout';

const Customers = () => {
  const { data, isLoading } = useGetCustomersQuery();

  const columns = [
    {
      field: '_id',
      headerNName: 'ID',
      flex: 1,
    },
    {
      field: 'name',
      headerNName: 'Name',
      flex: 0.5,
    },
    {
      field: 'email',
      headerNName: 'Email',
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerNName: 'Phone Number',
      flex: 0.5,
    },
    {
      field: 'country',
      headerNName: 'Country',
      flex: 0.5,
    },
    {
      field: 'occupation',
      headerNName: 'Occupation',
      flex: 1,
    },
    {
      field: 'role',
      headerNName: 'Role',
      flex: 0.5,
    },
  ];

  return (
    <TestLayout
      title="CUSTOMERS"
      subtitle="See all  customers"
      isLoading={isLoading}
    >
      <Box height="80vh">
        <DataGrid
          loading={isLoading}
          rows={data || []}
          getRowId={row => row._id}
          columns={columns}
        />
      </Box>
    </TestLayout>
  );
};

export default Customers;
