import React from 'react';
import { Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';

export const DashboardBanner: React.FC = () => {
  return (
    <HStack
      backgroundImage="/img/banner-bg.png"
      w={{ base: '100%', lg: '85%' }}
      h={{ base: 'auto', lg: '19.438rem' }}
      bgColor="#f8f9ff"
      overflow="hidden"
      position="relative"
      boxShadow="base"
    >
      <Image src="/img/illustration.png" />
      <VStack
        position="absolute"
        top={{ base: '0', lg: 'initial' }}
        bottom={{ base: '0', lg: 'initial' }}
        w={{ base: 'full', lg: 'auto' }}
        bg={{ base: 'rgba(0,0,0,.7)', lg: 'transparent' }}
        right={{ base: '0', lg: '3rem' }}
        display={{ base: 'flex', lg: 'flex' }}
        alignItems={{ base: 'center', lg: 'center' }}
        justifyContent={{ base: 'center', lg: 'center' }}
        px={{ base: '1rem', lg: '0' }}
      >
        <Heading
          as='h1'
          fontSize={{ base: '2rem', md: '2.063rem' }}
          fontWeight="semibold"
          color={{ base: '#fff', lg: 'inherit' }}
        >
          20% Safe On Your First Account
        </Heading>
        <HStack spacing="1rem">
          <Text
            fontSize="1.375rem"
            border="1px dashed"
            borderColor={{ base: '#fff', lg: '#42474A' }}
            rounded="md"
            px="0.813rem"
            py="0.375rem"
            color={{ base: '#fff', lg: 'inherit' }}
          >
            NEWBIE20
          </Text>
          <Button
            variant="ghost"
            fontSize="1.375rem"
            fontWeight="semibold"
            color={{ base: '#fff', lg: 'inherit' }}
          >
            Copy Code
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};
