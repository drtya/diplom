import React from 'react'
import Form from '../../layouts/UIComponents/Form/Form'
import Header from '../../layouts/Header/Header'
import styles from './Style.module.scss'
import Input from '../../layouts/UIComponents/Input/Input'
import Button from '../../layouts/UIComponents/Button/Button'
import SocialBlock from '../../layouts/UIComponents/SocialBlock/SocialBlock'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { activate } from '../../store/userActivate'
import { useNavigate } from 'react-router'

const Login = () => {
    const userActivate = useSelector((state) => state.UserActivate.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = {
        email: 'admin@mail.ru',
        pass: '123'
    }
    const { values, errors, handleBlur, handleChange, resetForm, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('*email введен некорректно').required('*заполните поле email'),
            password: Yup.string().required('*заполните поле пароль'),
        }),
        onSubmit: () => {
            if (values.email === user.email && values.password === user.pass) {
                dispatch(activate())
                resetForm()
                navigate('/home')
            }
        }
    })
    return (
        <div className={styles.login}>
            
            <div className={styles.login_form}>
                <Form onSubmit={handleSubmit}>
                    <h2 className={styles.login_form_title}>Авторизация</h2>
                    <div className={styles.login_form_inputs}>
                        <Input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email' />
                        <Input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Пароль' type='password' />
                        {errors.email && errors.password ? <p className={styles.input_error}>*заполните все поля</p> :
                            errors.email ? <p className={styles.input_error}>{errors.email}</p> :
                                errors.password ? <p className={styles.input_error}>{errors.password}</p> :
                                    ''}
                        <a href="#" className={styles.reset_pass}>забыли пароль?</a>
                    </div>
                    <Button type='submit'>Войти</Button>
                </Form>
                <SocialBlock />
            </div>
        </div>
    )
}

export default Login