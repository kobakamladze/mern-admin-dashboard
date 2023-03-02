import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

import LayoutTitle from '../components/LayoutTitle';
import { useGetCustomersQuery } from '../state/api/apiSlice';

const Customers = () => {
  useEffect(() => {
    document.title = 'Customers';
  }, []);

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
    <Box m="1.5rem 2.5rem">
      <LayoutTitle title="CUSTOMERS" subtitle="See all  customers" />

      <Box mt="1.5rem" height="80vh">
        <DataGrid
          loading={isLoading}
          rows={data || []}
          getRowId={row => row._id}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
