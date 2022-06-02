import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/Admin';
import theme from './theme/theme';
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}></Route>
        <Route path="/"element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
