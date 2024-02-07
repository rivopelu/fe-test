import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

export function useRegisterPage() {
  const imageUrl = 'https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg';
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
      console.log(values);
    },
  });

  function onChangeShowPassword() {
    setShowPassword(!showPassword);
  }

  return {
    imageUrl,
    formik,
    showPassword,
    onChangeShowPassword,
  };
}
