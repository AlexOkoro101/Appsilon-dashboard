import React, { PropsWithChildren, useContext, useState } from 'react';

const SidebarContext = React.createContext<{showSidebar: boolean, setshowSidebar: React.Dispatch<React.SetStateAction<boolean>>}>({
  showSidebar: false, setshowSidebar: () => {}
});

export const SidebarProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState<boolean>(false);
  return (
    <SidebarContext.Provider value={{ showSidebar, setshowSidebar }}>
      { children }
    </SidebarContext.Provider>
  );
};

export default function useMobileSidebar() {
  return useContext(SidebarContext);
}
