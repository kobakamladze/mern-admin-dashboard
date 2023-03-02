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

import LayoutTitle from '../components/LayoutTitle';
import { useGetProductsQuery } from '../state/api/apiSlice';
import Spinner from '../components/Spinner';

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
  const { data, isLoading, isFetching } = useGetProductsQuery();
  const isMobile = useMediaQuery('(min-width: 1000px)');

  if (isLoading || isFetching) return <Spinner />;

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
