import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Route as SidebarLinks } from '../../types/models';
interface SidebarNavProps {
  routes: SidebarLinks[]
};

const SidebarNavigation: React.FC<SidebarNavProps> = ({ routes }) => {
  const location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName;
  };
  const createLinks = (routes: SidebarLinks[]) => {
    return routes.map((prop, index) => {
      return (
        <NavLink to={'/admin' + prop.path} key={index}>
          <Button
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{ borderColor: 'transparent' }}
            gap="1.563rem"
            leftIcon={prop.icon}
            variant='ghost'
            color={activeRoute('/admin' + prop.path) ? 'primary' : '#A2A4B9'}
            fontWeight={activeRoute('/admin' + prop.path) ? 'semibold' : 'normal'}
            h="auto"
          >
            {prop.name}
          </Button>
        </NavLink>
      );
    });
  };
  const links = <>{createLinks(routes)}</>;
  return (
    <VStack alignItems="flex-start" spacing="1.75rem">
      {links}
    </VStack>
  );
};

export default SidebarNavigation;
