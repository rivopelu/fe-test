import { Container } from '@mui/material';
import { InputText } from '../components/InputText.tsx';
import { useTranslation } from 'react-i18next';
import { InputTextarea } from '../components/InputTextarea.tsx';
import { useNewBlogPage } from './useNewBlogPage.ts';
import { Btn } from '../components/Btn.tsx';

export function NewBlogPage() {
  const { t } = useTranslation();
  const page = useNewBlogPage();
  const formik = page.formik;
  return (
    <Container>
      <div>
        <div className={'flex items-center justify-between'}>
          <h1>NEW BLOG PAGE</h1>
          <Btn onClick={() => formik.handleSubmit()}>{t('submit').toUpperCase()}</Btn>
        </div>
        <div className={'mt-10 bg-white rounded-lg p-6 shadow-md border grid gap-4'}>
          <InputText
            label={t('title')}
            placeholder={t('insert_title')}
            required
            name={'title'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            errorMessage={formik.touched.title && formik.errors.title}
          />
          <InputTextarea
            label={t('body')}
            placeholder={t('insert_body')}
            required
            name={'body'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            errorMessage={formik.touched.body && formik.errors.body}
          />
        </div>
      </div>
    </Container>
  );
}
