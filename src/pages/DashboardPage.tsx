import { Container } from '@mui/material';
import { Btn } from '../components/Btn.tsx';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes.ts';
import { useDashboardPage } from './useDashboardPage.ts';

export function DashboardPage() {
  const { t } = useTranslation();
  const page = useDashboardPage();

  return (
    <Container>
      <div className={'flex items-center justify-between'}>
        <h3>DASHBOARD PAGE</h3>
        <Link to={ROUTES.NEW_BLOG()}>
          <Btn startIcon={<Add />}>{t('new_blog').toUpperCase()}</Btn>
        </Link>
      </div>
    </Container>
  );
}
