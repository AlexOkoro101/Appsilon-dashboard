import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import AdminNavbar from '../navbars/AdminNavbar';

const MainPanel: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box>
      <AdminNavbar />
      { children }
    </Box>
  );
};

export default MainPanel;
