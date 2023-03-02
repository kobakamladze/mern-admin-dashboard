import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import LayoutTitle from '../components/LayoutTitle';
import Spinner from '../components/Spinner';

const PageLayout = ({ title, subtitle, children, isLoading = false }) => {
  const documentTitle = `${title.charAt(0).toUpperCase()}${title
    .slice(1)
    .toLowerCase()}`;

  useEffect(
    () => {
      document.title = documentTitle;
    },
    // eslint-disable-next-line
    []
  );

  if (isLoading) return <Spinner />;

  return (
    <Box m="1.5rem 2.5rem">
      <LayoutTitle title={title} subtitle={subtitle} />

      <Box m="1.5rem 0" height="100%">
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
