import { VStack } from '@chakra-ui/react';
import React from 'react';
import { DashboardBanner } from '../../../common/banners';
import { Card } from '../../../types/models';
import DashboardCards from './components/DashboardCards';

const Dashboard: React.FC = () => {
  const cardDetails: Card = {
    price: 1000,
    name: 'Total Value of Disbursement',
    policy: {
      price: 400,
      range: 35
    },
    claim: {
      price: 800,
      range: 80
    }
  };
  const cardArray: Card[] = Array(3).fill(cardDetails);
  return (
    <VStack spacing="1.25rem" alignItems="flex-start">
      <DashboardBanner />
      <DashboardCards cardArray={cardArray} />
    </VStack>
  );
};

export default Dashboard;
