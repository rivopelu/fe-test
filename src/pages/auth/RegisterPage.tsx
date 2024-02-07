import { useRegisterPage } from './useRegisterPage.ts';
import { InputText } from '../../components/InputText.tsx';
import { Key, Person } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Alert, Checkbox, FormControlLabel } from '@mui/material';
import { Btn } from '../../components/Btn.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.ts';

export function RegisterPage() {
  const { t } = useTranslation();
  const page = useRegisterPage();
  const formik = page.formik;
  return (
    <div className={'h-screen'}>
      <div className={' z-50 h-full relative  w-full flex items-center justify-center'}>
        <div className={'bg-white p-6 lg:min-w-[500px] mx-4 rounded-lg shadow-lg'}>
          <div className={'mb-4'}>
            {page.successRegister && (
              <div className={'mb-3'}>
                <Alert variant="outlined" severity="success">
                  {t('register_success_alert')}
                </Alert>
              </div>
            )}
            <h1>{t('register')}</h1>
            <div>{t('register_description')}</div>
            <div className={'mt-2'}>
              {t('do_you_have_account')}{' '}
              <Link className={'text-primary-main hover:underline'} to={ROUTES.AUTH.LOGIN()}>
                {t('login_here')}
              </Link>
            </div>
          </div>

          <div className={'mt-4 grid gap-4'}>
            <InputText
              name={'email'}
              id={'email'}
              required
              onEnter={() => formik.handleSubmit()}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errorMessage={formik.touched.email && formik.errors.email}
              startAdornment={<Person />}
              label={t('email')}
              placeholder={t('insert_email')}
            />
            <InputText
              name={'password'}
              required
              onEnter={() => formik.handleSubmit()}
              id={'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              errorMessage={formik.touched.password && formik.errors.password}
              startAdornment={<Key />}
              label={t('password')}
              placeholder={t('insert_password')}
              type={page.showPassword ? 'text' : 'password'}
            />
            <FormControlLabel control={<Checkbox onChange={page.onChangeShowPassword} checked={page.showPassword} />} label={t('show_password')} />
            <Btn variant={'outlined'} sx={{ py: 2 }} onClick={() => formik.handleSubmit()}>
              {t(page.loadingRegister ? 'loading' : 'register')}
            </Btn>
          </div>
        </div>
      </div>

      <img alt={'home'} src={page.imageUrl} className={'fixed z-10 top-0 w-full h-96 object-cover'} />
    </div>
  );
}
