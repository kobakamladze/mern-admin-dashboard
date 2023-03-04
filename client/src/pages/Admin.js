import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { useGetAdminsQuery } from '../state/api/apiSlice';
import PageLayout from '../layouts/PageLayout';

const Admin = () => {
  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 0.7,
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
    <PageLayout
      title="ADMIN"
      subtitle="See full list of admins"
      isLoading={isLoading}
    >
      <Box height="80vh">
        <DataGrid
          loading={isLoading}
          getRowId={row => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </PageLayout>
  );
};

export default Admin;
