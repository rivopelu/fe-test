import { INavbarData } from '../model/interfaces/INavbarMenu.ts';
import { ROUTES } from './routes.ts';
import { Home } from '@mui/icons-material';

export const navbarDataMenu: INavbarData[] = [
  {
    title: 'Home',
    path: ROUTES.HOME(),
    icons: Home,
  },
];
