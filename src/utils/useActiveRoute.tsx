import { useLocation } from 'react-router-dom';

export const activeRoute = (routeName: string) => {
  const location = useLocation();
  return location.pathname === routeName;
};
