import { Container } from '@mui/material';
import { Btn } from '../components/Btn.tsx';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes.ts';
import { useDashboardPage } from './useDashboardPage.ts';
import { ITableColumnData, MainTable } from '../components/molecules/MainTable.tsx';
import { IResListBlog } from '../model/response/IResListBlog.ts';

export function DashboardPage() {
  const { t } = useTranslation();
  const page = useDashboardPage();

  const tableColumns: ITableColumnData[] = [
    {
      key: 'key',
      headerTitle: t('key'),
      layouts: (e: IResListBlog) => <div>{e.key}</div>,
    },
    {
      key: 'title',
      headerTitle: t('title'),
      layouts: (e: IResListBlog) => <div>{e.title}</div>,
    },
    {
      key: 'body',
      headerTitle: t('body'),
      layouts: (e: IResListBlog) => <div>{e.body}</div>,
    },
  ];
  return (
    <Container>
      <div className={'flex items-center justify-between'}>
        <h3>DASHBOARD PAGE</h3>
        <Link to={ROUTES.NEW_BLOG()}>
          <Btn startIcon={<Add />}>{t('new_blog').toUpperCase()}</Btn>
        </Link>
      </div>
      <div className={'mt-10'}>
        <MainTable data={page.data} columns={tableColumns} />
      </div>
    </Container>
  );
}
