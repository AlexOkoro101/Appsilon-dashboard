import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
interface ButtonProps {
  title: string;
  icon: boolean;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ title, icon }) => {
  return (
    <Button
      bg="primary"
      color="white"
      rounded="lg"
      rightIcon={ icon ? <Icon as={AiOutlinePlus} /> : <></>}
    >
      {title}
    </Button>
  );
};
