import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyleVariable } from '../constants/StyleVariable.ts';
import { navbarDataMenu } from '../constants/navbarDataMenu.ts';
import { PageTypeEnum } from '../enums/PageTypeEnums.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { ENV } from '../constants/Env.ts';
import { useTranslation } from 'react-i18next';
import { Logout } from '@mui/icons-material';

export function Sidebar(props: IProps) {
  const [currentPathSplit, setCurrentPathSplit] = useState<string>('/');
  const { t } = useTranslation();

  const location = useLocation();

  function checkActiveNav(item: string) {
    return item.split('/')[1] === currentPathSplit;
  }

  useEffect(() => {
    const split = location.pathname.split('/')[1];
    setCurrentPathSplit(split);
  }, [location.pathname]);
  function menuNavComponents() {
    return (
      <List
        sx={{
          width: '100%',
          maxWidth: StyleVariable.sizing.sidebarWidth,
          background: 'background.paper',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {navbarDataMenu.map((item, i) => {
          const Icon = item.icons;
          return (
            <Link to={item.path} key={i}>
              <ListItemButton className={`${checkActiveNav(item.path) ? 'active_list__' : ''}`}>
                <ListItemIcon>
                  <Icon color={checkActiveNav(item.path) ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText sx={{ marginLeft: 2 }} primary={t(item.title).toUpperCase()} />
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    );
  }

  return (
    <div className={`z-[900] duration-200 ${props.type !== PageTypeEnum.PRIMARY ? '-translate-x-96' : ''} `}>
      <div
        style={{
          width: props.type === PageTypeEnum.PRIMARY ? StyleVariable.sizing.sidebarWidth : 0,
        }}
        className={'bg-blue-700'}
      ></div>
      <div
        style={{
          width: props.type === PageTypeEnum.PRIMARY ? StyleVariable.sizing.sidebarWidth : 0,
        }}
        className={'bg-white   fixed border-r p-4 h-screen flex flex-col justify-between'}
      >
        <div>
          <div>
            <div className={'px-3'}>
              <BrandLogo />
            </div>
            <div className={'mt-4 navList_item__'}>{menuNavComponents()}</div>
          </div>
        </div>
        <div>
          <div className={'mb-10 border-b'}>
            <ListItemButton>
              <ListItemIcon>
                <Logout color={'error'} />
              </ListItemIcon>
              <ListItemText primary={t('logout').toUpperCase()} />
            </ListItemButton>
          </div>
          <p className={'text-slate-500 text-xs'}>V {ENV.VERSION}</p>
        </div>
      </div>
    </div>
  );
}

interface IProps {
  type: PageTypeEnum;
}
