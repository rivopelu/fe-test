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
    console.log(data);
  }, [data]);
  useEffect(() => {
    crudService.getAll().on('value', onChanges);
  }, []);

  function onCloseModal() {
    setOpenModalNew(false);
  }

  function onSubmitBlog() {
    formik.handleSubmit();
  }

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
      crudService.create({ ...values, id: uuid });
    },
  });

  return {
    data,
    textHelper,
    openModalNew,
    onCloseModal,
    onSubmitBlog,
    setOpenModalNew,
    formik,
  };
}
