import { VStack } from '@chakra-ui/react';
import React from 'react';
import useMobileSidebar from '../../hooks/useMobileSidebar';
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
  const { showSidebar } = useMobileSidebar();
  const profile = <Profile {...adminUser} />;
  return (
    <VStack
      display={{ base: showSidebar ? 'flex' : 'none', lg: 'flex' }}
      bg="white"
      w={{ base: 'full', md: '19.125rem' }}
      pos={{ base: 'fixed', md: 'initial' }}
      zIndex={{ base: 50, md: 'initial' }}
      maxW="19.125rem"
      alignItems="flex-start"
      boxShadow="7px 0px 8px 0px #e9e9ed"
      py="2rem"
      h="100vh"
      px="3.313rem"
      roundedBottomRight="2xl"
      spacing="3.125rem"
      overflowY="auto"
    >
      <SidebarHeader profile={profile} />
      <SidebarNavigation routes={routes} />
    </VStack>
  );
};

export default Sidebar;
