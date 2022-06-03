import { Icon } from '@chakra-ui/react';
import { FiGrid, FiLogOut } from 'react-icons/fi';
import { BsFileEarmarkText, BsShieldLock } from 'react-icons/bs';
import { SiMicrosoftoffice } from 'react-icons/si';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiBug2Line } from 'react-icons/ri';
import Dashboard from './views/dashboard/dashboard';
import Policy from './views/dashboard/policy';
import Reports from './views/dashboard/reports';
import Company from './views/dashboard/company';
import UserAccount from './views/dashboard/user';
import History from './views/dashboard/history';
import { Route } from './types/models';
const dashboardRoutes: Route[] = [
  {
    path: '/dashboard',
    name: 'Overview',
    icon: <Icon as={FiGrid} fontSize="1.25rem" />,
    component: <Dashboard />,
    bottom: false
  },
  {
    path: '/policy',
    name: 'Policy',
    icon: <Icon as={BsShieldLock} fontSize="1.25rem" />,
    component: <Policy />,
    bottom: false
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: <Icon as={RiBug2Line} fontSize="1.25rem" />,
    component: <Reports />,
    bottom: false
  },
  {
    path: '/company',
    name: 'Company',
    icon: <Icon as={SiMicrosoftoffice} fontSize="1.25rem" />,
    component: <Company />,
    bottom: false
  },
  {
    path: '/user-account',
    name: 'User Account',
    icon: <Icon as={FaRegUserCircle} fontSize="1.25rem" />,
    component: <UserAccount />,
    bottom: false
  },
  {
    path: '/history',
    name: 'History',
    icon: <Icon as={BsFileEarmarkText} fontSize="1.25rem"/>,
    component: <History />,
    bottom: false
  },
  {
    path: '',
    name: 'Log Out',
    icon: <Icon as={FiLogOut} fontSize="1.25rem" />,
    component: undefined,
    bottom: true
  }
];
export default dashboardRoutes;
