import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPanel from '../components/layout/MainPanel';
import Sidebar from '../components/sidebar';
import dashboardRoutes from '../routes';
import { Route as DashboardRoutes } from '../types/models';

const AdminLayout: React.FC = () => {
  // const getActiveRoute = (routes) => {
  //   const activeRoute = '';
  //   for (let i = 0; i < routes.length; i++) {
  //     if (
  //       window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
  //     ) {
  //       return routes[i].name;
  //     }
  //   }
  //   return activeRoute;
  // };
  const getRoutes = (routes: DashboardRoutes[] = []) => {
    return routes.map((prop, key) => (
      <Route
        path={prop.path}
        element={prop.component}
        key={key}
      />
    ));
  };
  return (
    <HStack spacing="0" alignItems="flex-start">
      <Sidebar
        routes={dashboardRoutes}
        logoText="Insurance Portal"
      />
      <MainPanel>
        <Routes>
          {getRoutes(dashboardRoutes)}
        </Routes>
      </MainPanel>
    </HStack>
  );
};

export default AdminLayout;
