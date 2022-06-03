import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import dashboardRoutes from '../../routes';
import AdminNavbar from '../navbars/AdminNavbar';

const MainPanel: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box flexGrow="1">
      <AdminNavbar routes={dashboardRoutes} />
      <Box p={{ base: '1.313rem', lg: '2.313rem' }} bg="contentbg">
        { children }
      </Box>
    </Box>
  );
};

export default MainPanel;
