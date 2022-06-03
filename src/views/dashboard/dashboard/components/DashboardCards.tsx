import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { DashboardCard } from '../../../../common/cards';
import { Card } from '../../../../types/models';
interface Cards {
  cardArray: Card[]
};

const DashboardCards: React.FC<Cards> = ({ cardArray = [] }) => {
  return (
    <Box w="85%">
      <Grid
        templateColumns={{
          md: 'repeat(3, 1fr)'
        }}
        gap="1.188rem"
      >
        {cardArray.map((props, key) => (
          <GridItem key={key} >
            <DashboardCard {...props}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardCards;
