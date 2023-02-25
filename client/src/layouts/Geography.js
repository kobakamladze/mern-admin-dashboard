import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';

import { geoData } from '../state/geoData';
import { useGetGeographyQuery } from '../state/api/apiSlice';
import LayoutTitle from '../components/LayoutTitle';

const Geography = () => {
  const theme = useTheme();

  const { data, isLoading } = useGetGeographyQuery();

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box m="1.5rem 2.5rem" sx={{ color: 'black' }}>
      <LayoutTitle
        title="GEOGRAPHY"
        subtitle="See number of users around the world."
      />

      <Box mt="40px" height="80vh">
        <ResponsiveChoropleth
          data={data}
          features={geoData.features}
          margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={155}
          projectionTranslation={[0.45, 0.5]}
          projectionRotation={[0, 0, 0]}
          graticuleLineColor="#dddddd"
          borderWidth={1.5}
          borderColor="#ffffff"
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: -10,
              translateY: -125,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: theme.palette.secondary[200],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: 'black',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Geography;
