import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/store.ts';
import { AccountActions } from '../../redux/actions/AccountActions.ts';
import ErrorService from '../../services/ErrorService.ts';

export function useRegisterPage() {
  const dispatch = useAppDispatch();
  const accountAction = new AccountActions();
  const errorService = new ErrorService();

  const imageUrl = 'https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg';
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
  const [successRegister, setSuccessRegister] = useState<boolean>(false);

  const validationScheme = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(2),
  });
  const formik = useFormik({
    initialValues: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    },
    validationSchema: validationScheme,
    onSubmit: (values) => {
      setLoadingRegister(true);
      dispatch(accountAction.register(values))
        .then(onSuccessRegister)
        .catch((e) => {
          setLoadingRegister(false);
          errorService.fetchApiError(e);
        });
    },
  });

  function onSuccessRegister() {
    setSuccessRegister(true);
    setLoadingRegister(false);
    formik.setValues({
      email: '',
      password: '',
    });
  }

  function onChangeShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    imageUrl,
    formik,
    showPassword,
    loadingRegister,
    successRegister,
    onChangeShowPassword,
  };
}
