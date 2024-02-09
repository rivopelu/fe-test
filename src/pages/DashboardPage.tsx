import { Container, IconButton, Tooltip } from '@mui/material';
import { Btn } from '../components/Btn.tsx';
import { useTranslation } from 'react-i18next';
import { Add, Delete, Edit, Info } from '@mui/icons-material';
import { useDashboardPage } from './useDashboardPage.ts';
import { ITableColumnData, MainTable } from '../components/molecules/MainTable.tsx';
import { IResListBlog } from '../model/response/IResListBlog.ts';
import { PopupModal } from '../components/molecules/PopupModal.tsx';
import { InputText } from '../components/InputText.tsx';
import { InputTextarea } from '../components/InputTextarea.tsx';

export function DashboardPage() {
  const { t } = useTranslation();
  const page = useDashboardPage();
  const formik = page.formik;

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
      layouts: (e: IResListBlog) => <div>{e?.body ? page.textHelper.truncateText(e.body) : '-'}</div>,
    },
    {
      key: 'actions',
      headerTitle: 'action',
      layouts: uiActions,
    },
  ];

  function createModal() {
    return (
      <div className={'p-4 grid gap-4'}>
        <h3>{t('create_new_blog').toUpperCase()}</h3>
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
    );
  }

  function uiActions(e: IResListBlog) {
    return (
      <div className={'grid grid-cols-3 gap-3'}>
        <Tooltip title={t('detail')}>
          <IconButton onClick={() => page.onClickDetail(e)}>
            <Info color={'info'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('edit')}>
          <IconButton>
            <Edit color={'primary'} />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('delete')}>
          <IconButton>
            <Delete color={'error'} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }

  function componentDetail() {
    return (
      <div className={'max-h-[75vh]  overflow-y-auto'}>
        <h3>{page.dataDetail?.title || '-'}</h3>
        <div className={'mt-2'}>{page.dataDetail?.body || ''}</div>
      </div>
    );
  }

  return (
    <>
      <PopupModal
        disableSubmit={page.disableSubmit}
        onSubmit={() => page.onSubmitBlog()}
        onClose={page.onCloseModal}
        isOpen={page.openModalNew}
        components={createModal()}
      />
      <PopupModal onClose={page.onCloseDetail} onCancel={page.onCloseDetail} isOpen={page.showDetail} components={componentDetail()} />
      <Container>
        <div className={'flex items-center justify-between'}>
          <h3>DASHBOARD PAGE</h3>
          <Btn onClick={() => page.setOpenModalNew(true)} startIcon={<Add />}>
            {t('new_blog').toUpperCase()}
          </Btn>
        </div>
        <div className={'mt-10'}>
          <MainTable data={page.data} columns={tableColumns} />
        </div>
      </Container>
    </>
  );
}
