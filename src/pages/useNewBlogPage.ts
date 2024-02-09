import { useFormik } from 'formik';
import { IReqCreateBlog } from '../model/request/IReqCreateBlog.ts';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import 'firebase/database';
import { CrudService } from '../services/CrudService.ts';

export function useNewBlogPage() {
  const uuid = uuidv4();
  const crudService = new CrudService();
  const initState: IReqCreateBlog = {
    id: '',
    body: '',
    title: '',
  };

  const validationScheme = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initState,
    validationSchema: validationScheme,
    onSubmit: (values) => {
      crudService.create({ ...values, id: uuid });
    },
  });

  return {
    formik,
  };
}
