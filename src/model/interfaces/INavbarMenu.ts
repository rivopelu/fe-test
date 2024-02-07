import { SvgIconComponent } from '@mui/icons-material';

export interface INavbarData {
  title: string;
  icons: SvgIconComponent;
  path: string;
  children?: IChildrenNavbarData[];
}

interface IChildrenNavbarData {
  title: string;
  path: string;
}
