import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Admin, Route } from '../../types/models';
import Profile from './components/Profile';
import SidebarHeader from './SidebarHeader';
import SidebarNavigation from './SidebarNavigation';
interface SidebarProps {
  routes: Route[],
  logoText: string;
};

const adminUser: Admin = {
  first_name: 'Alex',
  last_name: 'Okoro',
  image: '/img/dp.jpeg',
  plan: 'Free'
};

const Sidebar: React.FC<SidebarProps> = ({ routes, logoText }) => {
  const profile = <Profile {...adminUser} />;
  return (
    <VStack
      bg="white"
      w="19.125rem"
      maxW="19.125rem"
      alignItems="flex-start"
      boxShadow="7px 0px 8px 0px rgb(240,240,240)"
      h="100vh"
      py="2rem"
      px="3.313rem"
      roundedBottomRight="2xl"
      spacing="3.125rem"
    >
      <SidebarHeader profile={profile} />
      <SidebarNavigation routes={routes} />
    </VStack>
  );
};

export default Sidebar;
