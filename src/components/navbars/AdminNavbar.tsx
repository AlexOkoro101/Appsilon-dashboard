import { HStack, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route as SidebarLinks } from '../../types/models';
import { activeRoute } from '../../utils/useActiveRoute';
import { GrMenu } from 'react-icons/gr';
import useMobileSidebar from '../../hooks/useMobileSidebar';
interface NavProps {
  routes: SidebarLinks[]
};

const AdminNavbar: React.FC<NavProps> = ({ routes }) => {
  const { showSidebar, setshowSidebar } = useMobileSidebar();
  const toggleMenu = () => {
    if (window.innerWidth > 768) return;
    setshowSidebar(!showSidebar);
  };
  return (
    <HStack
      px={{ base: '1.438rem', lg: '3.438rem' }}
      py="2rem"
      bg="white"
      spacing={{ base: '0', md: '2.188rem' }}
      justifyContent={{ base: 'space-between', md: 'flex-start' }}
      boxShadow="-2px 7px 8px 0px #e9e9ed"
      w={{ base: '100%', lg: 'auto' }}
    >
      {routes.slice(0, 3).map((prop, key) => (
        <Link
          to={'/admin' + prop.path}
          as={NavLink} key={key}
          position="relative"
          color={activeRoute('/admin' + prop.path) ? 'primary' : 'initial'}
          fontWeight={activeRoute('/admin' + prop.path) ? 'semibold' : 'normal'}
          _hover={{ textDecoration: 'none' }}
          _focus={{ borderColor: 'transparent' }}
          _before={activeRoute('/admin' + prop.path) ? {
            content: '""',
            position: 'absolute',
            top: '100%',
            left: '40%',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'primary',
            width: '1rem',
            background: 'primary'
          } : {}}
        >
          {prop.name}
        </Link>
      ))}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        variant='outline'
        aria-label='toggle menu'
        icon={<GrMenu />}
        onClick={toggleMenu}
        marginLeft="2rem"
      />
    </HStack>
  );
};

export default AdminNavbar;
