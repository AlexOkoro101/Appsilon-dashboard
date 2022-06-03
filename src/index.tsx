import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { SidebarProvider } from './hooks/useMobileSidebar';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
