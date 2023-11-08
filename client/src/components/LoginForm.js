import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axios.post('http://localhost:4000/api/login', {
        email: values.email,
        password: values.password,
      });

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token.split(' ')[1]);
        window.location.href = '/home';
      } else {
        setFieldError('password', 'Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <h2>Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
