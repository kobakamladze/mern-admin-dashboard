import { useState } from 'react';
import {
  Box,
  useMediaQuery,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from '@mui/material';

import { useGetProductsQuery } from '../state/api/apiSlice';
import TestLayout from '../layouts/PageLayout';

const ProductCard = ({
  product: {
    _id,
    name,
    category,
    description,
    price,
    rating,
    supply,
    productStat,
  },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Card
      key={_id}
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Typography
          fontSize="14px"
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>

        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography
          mb="1.rem"
          color={theme.palette.secondary[400]}
          gutterBottom
        >{`$${price}`}</Typography>

        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          SEE MORE
        </Button>
      </CardActions>

      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply: {supply}</Typography>
          <Typography>
            Yearly sales this year: : {productStat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly units sold this year: {productStat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const ProductsList = ({ data }) => {
  return data.map(product => (
    <ProductCard key={product._id} product={product} />
  ));
};

const CatalogLayout = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isMobile = useMediaQuery('(min-width: 1000px)');

  return (
    <Box m="1.5rem 2.5rem">
      <TestLayout
        title="PRODUCTS"
        subtitle="See list of your products"
        isLoading={isLoading}
      >
        <Box
          mt="20px"
          height="100%"
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
      </TestLayout>
    </Box>
  );
};

export default CatalogLayout;
