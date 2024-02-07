import { useRegisterPage } from './useRegisterPage.ts';
import { InputText } from '../../components/InputText.tsx';
import { Check, Key, Person } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Btn } from '../../components/Btn.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.ts';

export function RegisterPage() {
  const { t } = useTranslation();
  const page = useRegisterPage();
  const formik = page.formik;

  function successRegisterComponent() {
    return (
      <div className={'flex items-center flex-col justify-between py-10   gap-12'}>
        <h1>{t('success')}</h1>
        <div className={'flex items-center justify-center flex-col text-center'}>
          <div className={'bg-green-500/30 h-32 w-32 flex items-center justify-center border border-green-500 rounded-full '}>
            <Check fontSize={'inherit'} sx={{ fontSize: 52 }} className={'text-5xl font-bold text-primary-main'} />
          </div>
          <div className={'pt-6'}>{t('register_success_alert')}</div>
          <Link to={ROUTES.AUTH.LOGIN()}>
            <Btn variant={'text'}>{t('login').toUpperCase()}</Btn>
          </Link>
        </div>
      </div>
    );
  }

  function formComponent() {
    return (
      <>
        <div className={'mb-4 relative'}>
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
      </>
    );
  }

  return (
    <div className={'h-screen'}>
      <div className={' z-50 h-full relative  w-full flex items-center justify-center'}>
        <div className={'bg-white p-6 relative lg:min-w-[500px] mx-4 rounded-lg shadow-lg'}>
          {page.successRegister ? successRegisterComponent() : formComponent()}
        </div>
      </div>

      <img alt={'home'} src={page.imageUrl} className={'fixed z-10 top-0 w-full h-96 object-cover'} />
    </div>
  );
}
