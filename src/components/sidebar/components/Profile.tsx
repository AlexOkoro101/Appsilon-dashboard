import { Avatar, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Admin } from '../../../types/models';

const Profile: React.FC<Admin> = ({ first_name, last_name, image, plan }) => {
  return (
    <VStack spacing="0.438rem">
      <Avatar size='xl' name='Dan Abrahmov' src={image} />
      <Text color="gray.primary" fontWeight="bold">Hello ! {first_name} {last_name}</Text>
      <Text fontSize="0.625rem" color="gray.secondary">Welcome Back To Your Insurance Portal</Text>
      <Text fontSize="0.875rem" color="gray.secondary">Your Plan : <Text as={'span'} color="range.green.right" display="inline">{plan}</Text> </Text>
    </VStack>
  );
};

export default Profile;
