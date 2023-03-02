import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetAdminsQuery } from '../state/api/apiSlice';
import LayoutTitle from '../components/LayoutTitle';

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 0.5,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 0.5,
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 0.4,
    },
    {
      field: 'occupation',
      headerName: 'Occupation',
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem" height="100%">
      <LayoutTitle title="MANAGMENT" subtitle="See full list of admins" />

      <Box m="1.5rem 2.5rem" height="80vh">
        <DataGrid
          loading={isLoading}
          getRowId={row => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Admin;
