import { useEffect, useState } from 'react';
import { CrudService } from '../services/CrudService.ts';
import firebase from 'firebase/app';
import { IResListBlog } from '../model/response/IResListBlog.ts';
import { TextHelper } from '../helper/TextHelper.ts';
import { v4 as uuidv4 } from 'uuid';
import { IReqCreateBlog } from '../model/request/IReqCreateBlog.ts';
import { useFormik } from 'formik';

export function useDashboardPage() {
  const crudService = new CrudService();
  const textHelper = new TextHelper();
  const [data, setData] = useState<IResListBlog[]>([]);
  const [openModalNew, setOpenModalNew] = useState<boolean>(false);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IResListBlog | undefined>(undefined);
  const [keyEdit, setKeyEdit] = useState<string | undefined>(undefined);
  const uuid = uuidv4();
  const initState: IReqCreateBlog = {
    id: '',
    body: '',
    title: '',
  };

  const formik = useFormik({
    initialValues: initState,
    onSubmit: (values) => {
      setOpenModalNew(false);
      formik.setValues(initState);
      if (keyEdit) {
        crudService.update(keyEdit, { ...values, id: uuid }).then();
      } else {
        crudService.create({ ...values, id: uuid });
      }
    },
  });

  function onDeleteData(key: string) {
    crudService.delete(key).then();
  }

  function onChanges(e: firebase.database.DataSnapshot) {
    const dataParse: IResListBlog[] = [];
    e.forEach(function (v) {
      const value = v.val();
      const key = v.key;
      dataParse.push({ ...value, key: key });
    });
    setData(dataParse);
  }

  useEffect(() => {
    crudService.getAll().on('value', onChanges);
    return () => {
      crudService.getAll().off('value', onChanges);
    };
  }, []);

  function onCloseModal() {
    setOpenModalNew(false);
    setKeyEdit(undefined);
  }

  function onClickDetail(e: IResListBlog) {
    setDataDetail(e);
    setShowDetail(true);
  }

  function onCloseDetail() {
    setShowDetail(false);
    setTimeout(() => {
      setDataDetail(undefined);
    }, 400);
  }
  function onSubmitBlog() {
    formik.handleSubmit();
  }

  function onClickNew() {
    formik.setValues(initState);
    setOpenModalNew(true);
    setKeyEdit(undefined);
  }
  function onClickEdit(e: IResListBlog) {
    setDataDetail(e);
    const data: IReqCreateBlog = {
      id: e.id,
      title: e.title,
      body: e.body,
      key: e.key,
    };
    setKeyEdit(e.key);
    formik.setValues(data);
    setOpenModalNew(true);
  }

  useEffect(() => {
    if (formik.values.body && formik.values.title) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [formik.values]);

  return {
    data,
    textHelper,
    openModalNew,
    formik,
    disableSubmit,
    showDetail,
    dataDetail,
    onClickNew,
    onCloseModal,
    onSubmitBlog,
    setOpenModalNew,
    onClickDetail,
    onCloseDetail,
    onDeleteData,
    onClickEdit,
  };
}
