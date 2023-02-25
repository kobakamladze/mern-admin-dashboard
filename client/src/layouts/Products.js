import { Box, Typography, useMediaQuery } from '@mui/material';
import LayoutTitle from '../components/LayoutTitle';
import { useGetProductsQuery } from '../state/api/apiSlice';
import ProductsList from '../components/ProductsList';

const CatalogLayout = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery();
  const isMobile = useMediaQuery('(min-width: 1000px)');

  if (isLoading || isFetching)
    return (
      <Box>
        <Typography fontSize="32px" fontWeight="bold">
          Loading...
        </Typography>
      </Box>
    );

  return (
    <Box m="1.5rem 2.5rem">
      <LayoutTitle title="PRODUCTS" subtitle="See list of your products" />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          '& > div': { gridColumn: !isMobile ? 'span 4' : undefined },
        }}
      >
        <ProductsList data={data} />
      </Box>
    </Box>
  );
};

export default CatalogLayout;
