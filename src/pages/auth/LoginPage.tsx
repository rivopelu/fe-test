import { useTranslation } from 'react-i18next';
import { InputText } from '../../components/InputText.tsx';
import { Key, Login, Person } from '@mui/icons-material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Btn } from '../../components/Btn.tsx';
import { useLoginPage } from './useLoginPage.ts';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.ts';

export function LoginPage() {
  const { t } = useTranslation();
  const page = useLoginPage();
  const formik = page.formik;
  return (
    <div className={'h-screen w-full bg-slate-50 grid lg:grid-cols-2'}>
      <div className={'flex items-center justify-center max-w-xl mx-auto w-full px-4'}>
        <div className={' w-full'}>
          <div className={'mb-14'}>
            <h1>{t('login')}</h1>
            <div>{t('enter_your_email_for_login')}</div>
            <div>
              {t('dont_have_account')}{' '}
              <Link to={ROUTES.AUTH.REGISTER()} className={'text-primary-main hover:underline '}>
                {t('register_here')}
              </Link>
            </div>
          </div>

          <div className={'mt-4 grid gap-4'}>
            <InputText
              name={'email'}
              id={'email'}
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errorMessage={formik.touched.email && formik.errors.email}
              startAdornment={<Person />}
              onEnter={() => formik.handleSubmit()}
              label={t('email')}
              placeholder={t('insert_email')}
            />
            <InputText
              name={'password'}
              required
              id={'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onEnter={() => formik.handleSubmit()}
              value={formik.values.password}
              errorMessage={formik.touched.password && formik.errors.password}
              startAdornment={<Key />}
              label={t('password')}
              placeholder={t('insert_password')}
              type={page.showPassword ? 'text' : 'password'}
            />
            <FormControlLabel control={<Checkbox onChange={page.onChangeShowPassword} checked={page.showPassword} />} label={t('show_password')} />
            <Btn variant={'outlined'} sx={{ py: 2 }} onClick={() => formik.handleSubmit()} endIcon={<Login />}>
              {t(page.loadingLogin ? 'loading' : 'login').toUpperCase()}
            </Btn>
          </div>
        </div>
      </div>
      <div className={'bg-primary-dark hidden lg:block'}>
        <img src={page.imageUrl} className={'h-full w-full object-cover'} alt={'login'} />
      </div>
    </div>
  );
}
