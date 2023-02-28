import { useMemo } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Box, useTheme } from '@mui/material';
import { useGetSalesQuery } from '../state/api/apiSlice';

const OverviewChart = ({ view }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();

  const [totalSalesLine, totalUnitsLine] = useMemo(
    () => {
      if (!data) return [];

      const { monthlyData } = data;
      const totalSalesLine = {
        id: 'totalSales',
        color: theme.palette.secondary.main,
        data: [],
      };
      const totalUnitsLine = {
        id: 'totalUnits',
        color: theme.palette.secondary[600],
        data: [],
      };

      Object.values(monthlyData).reduce(
        (acc, { month, totalSales, totalUnits }) => {
          const curSales = acc.sales + totalSales;
          const curUnits = acc.units + totalUnits;

          totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: month, y: curSales },
          ];
          totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: month, y: curUnits },
          ];

          return { sales: curSales, units: curUnits };
        },
        { sales: 0, units: 0 }
      );

      return [[totalSalesLine], [totalUnitsLine]];
    },
    // eslint-disable-next-line
    [data]
  );

  if (!data || isLoading) return <Box>Loading...</Box>;

  return (
    <ResponsiveLine
      data={view === 'units' ? totalUnitsLine : totalSalesLine}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default OverviewChart;
