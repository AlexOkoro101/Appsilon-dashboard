import React from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';

export const CompleteLogo: React.FC = () => {
  return (
    <HStack spacing="0.735rem" alignItems="center">
      <Image src="/img/icon.png" alt="Company Logo" />
      <Heading as='h1' size='1rem' fontWeight="semibold">
        Insurance Portal
      </Heading>
    </HStack>
  );
};

export const IncompleteLogo: React.FC = () => {
  return (
    <Box>
      <Image src="/img/icon.png" alt="Company Logo" />
    </Box>
  );
};
