import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegistrationForm = () => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		email: Yup.string().email('Please enter a valid email address').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
		try {
			const res = await axios.post('http://localhost:4000/api/register', {
				username: values.username,
				email: values.email,
				password: values.password,
			},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				});

			console.log(res.status);
			if (res.status === 200) {
				localStorage.setItem('token', res.data.token.split(' ')[1]);
				window.location.href = '/home';
			} else {
				setFieldError('password', 'Invalid username or password');
			}
		} catch (error) {
			setFieldError("password", error.response.data.error);
		}
		setSubmitting(false);
	};

	return (
		<div className="form-container">
			<Formik
				initialValues={{ username: '', email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="form">
					<h2>Create Account</h2>
					<div className="form-group">
						<label>Username:</label>
						<Field type="text" name="username" />
						<ErrorMessage name="username" component="div" className="error" />
					</div>
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
					<button type="submit">Register</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;
