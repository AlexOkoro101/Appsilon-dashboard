import { VStack } from '@chakra-ui/react';
import React from 'react';
import { PrimaryButton } from '../../common/buttons';
import { CompleteLogo } from '../../common/logo';
interface HeaderProps {
  profile: React.ReactNode
};

const SidebarHeader: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <VStack spacing="1.375rem">
      <CompleteLogo />
      { profile }
      <PrimaryButton title="Create New Plan" icon={true} />
    </VStack>
  );
};

export default SidebarHeader;
