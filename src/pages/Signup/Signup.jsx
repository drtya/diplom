import React, { useEffect, useState } from 'react'
import Form from '../../layouts/UIComponents/Form/Form'
import Header from '../../layouts/Header/Header'
import styles from './Style.module.scss'
import Input from '../../layouts/UIComponents/Input/Input'
import Button from '../../layouts/UIComponents/Button/Button'
import SocialBlock from '../../layouts/UIComponents/SocialBlock/SocialBlock'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Signup = () => {
    const [err, setErr] = useState('')


    const signUpSchema = Yup.object().shape({
        email: Yup.string().email('*email введен некорректно').required('*заполните поле email'),
        name: Yup.string().required('*заполните поле фио'),
        group: Yup.string().required('*заполните поле группа'),
        password: Yup.string().required('*заполните поле пароль').min(6, '*пароль должен содержать не менее 6 символов'),
    })
    const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            email: '',
            name: '',
            group: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: async (e) => {

            generateError()
            try {
                resetForm()
            }
            catch (err) {
                console.log(err);
            }

        },
    })
    const generateError = (e) => {
        e.preventDefault()
        Object.keys(errors).length > 1 && (errors.email !== '*email введен некорректно' && errors.password !== '*пароль должен содержать не менее 6 символов') ? setErr('*заполните все поля') :
            errors.group ? setErr(errors.group) :
                errors.name ? setErr(errors.name) :
                    errors.email ? setErr(errors.email) :
                        errors.password ? setErr(errors.password) :
                            setErr('')
    }

    // useEffect(() => {
    //     Object.keys(errors).length > 1 ? setErr('*заполните все поля') :
    //         errors.password ? setErr(errors.password) :
    //             errors.name ? setErr(errors.name) :
    //                 errors.group ? setErr(errors.group) :
    //                     errors.email ? setErr(errors.email) :
    //                         setErr('')
    // }, [errors])

    return (
        <div className={styles.signup}>
            
            <div className={styles.signup_form}>
                <Form onSubmit={handleSubmit}>
                    <h2 className={styles.signup_form_title}>Регистрация</h2>
                    <div className={styles.signup_form_inputs}>
                        <Input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email' />
                        <Input name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='ФИО' />
                        <Input name='group' value={values.group} onChange={handleChange} onBlur={handleBlur} placeholder='Группа' />
                        <Input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Пароль' type='password' />
                        {
                            err ? <p className={styles.input_error}>{err}</p> : ''
                        }
                        <a href="#" className={styles.reset_pass}>забыли пароль?</a>
                    </div>
                    <Button onClick={generateError} type='submit'>Зарегистрироваться</Button>
                </Form>
                <SocialBlock />
            </div>
        </div>
    )
}

export default Signup