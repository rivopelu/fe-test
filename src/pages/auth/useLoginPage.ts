import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../redux/store.ts';
import { AccountActions } from '../../redux/actions/AccountActions.ts';
import { IReqLogin } from '../../model/request/IReqLogin.ts';
import { ROUTES } from '../../constants/routes.ts';

export function useLoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accountActions = new AccountActions();
  const imageUrl =
    'https://4.bp.blogspot.com/-cLaYNBfwlHk/XGCrtANnA_I/AAAAAAAABsg/M1QserS5vm0abZ5OaKR7TuaTO3Bw9xehQCLcBGAs/s1600-rw/landscape%2Bphotography.jpg';
  const account = useAppSelector((state) => state.Account);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);

  const validationScheme = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationScheme,
    onSubmit: (values) => {
      onClickLogin(values);
    },
  });

  useEffect(() => {
    setLoadingLogin(account?.login?.loading || false);
    if (account?.login?.data) {
      navigate(ROUTES.HOME());
    }
  }, [account]);

  function onChangeShowPassword() {
    setShowPassword(!showPassword);
  }

  function onClickLogin(value: IReqLogin) {
    dispatch(accountActions.login(value)).then();
  }

  return {
    showPassword,
    loadingLogin,
    formik,
    imageUrl,
    onChangeShowPassword,
  };
}
