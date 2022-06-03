import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../types/models';

export const DashboardCard: React.FC<Card> = ({ price, name, policy, claim }) => {
  return (
    <Box bg="white" boxShadow="base" p="1.625rem">
      <VStack spacing="2.938rem" alignItems="flex-start">
        <VStack alignItems="flex-start">
          <Text fontSize="3.438rem">{price}<Text as={'sup'} fontSize="2.188rem" color="primary">$</Text></Text>
          <Text>{name}</Text>
        </VStack>
        <VStack w="full">
          <HStack w="full" justifyContent="space-between">
            <Text>Policy</Text>
            <Text fontSize="1.375rem">{policy.price}<Text as="sup" fontSize="0.813rem">$</Text></Text>
          </HStack>
          <Box
            h="0.313rem"
            w="full"
            bgGradient='linear(to-r, range.bg.left, range.bg.right)'
            rounded="2px"
          >
            <Box h="full" w={`${policy.range}%`} bgGradient='linear(to-r, range.green.left, range.green.right)'></Box>
          </Box>
        </VStack>
        <VStack w="full">
          <HStack w="full" justifyContent="space-between">
            <Text>Claim</Text>
            <Text fontSize="1.375rem">{claim.price}<Text as="sup" fontSize="0.813rem">$</Text></Text>
          </HStack>
          <Box
            h="0.313rem"
            w="full"
            bgGradient='linear(to-r, range.bg.left, range.bg.right)'
            rounded="2px"
          >
            <Box h="full" w={`${claim.range}%`} bgGradient='linear(to-r, range.purple.left, range.purple.right)'></Box>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};
