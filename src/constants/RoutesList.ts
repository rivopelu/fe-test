import { PageTypeEnum } from '../enums/PageTypeEnums.ts';
import { DashboardPage } from '../pages/DashboardPage.tsx';
import { ROUTES } from './routes.ts';
import { LoginPage } from '../pages/auth/LoginPage.tsx';
import { RegisterPage } from '../pages/auth/RegisterPage.tsx';

export interface IRoutesList {
  path: string;
  element: () => JSX.Element;
  type: PageTypeEnum;
}

export const routesList: IRoutesList[] = [
  {
    element: DashboardPage,
    path: ROUTES.HOME(),
    type: PageTypeEnum.PRIMARY,
  },
  {
    element: LoginPage,
    path: ROUTES.AUTH.LOGIN(),
    type: PageTypeEnum.FULL_PAGE,
  },
  {
    element: RegisterPage,
    path: ROUTES.AUTH.REGISTER(),
    type: PageTypeEnum.FULL_PAGE,
  },
];
