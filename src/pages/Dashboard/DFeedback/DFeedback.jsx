import React, { useEffect, useState } from 'react'
import styles from './Style.module.scss'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Form from '../../../layouts/UIComponents/Form/Form'
import Input from '../../../layouts/UIComponents/Input/Input'
import Button from '../../../layouts/UIComponents/Button/Button'

const DFeedback = () => {
    const [loading, setLoading] = useState(false)

    const sendMessageSchema = Yup.object().shape({
        message: Yup.string().required('*заполните все поля'),
    })
    const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: sendMessageSchema,
        onSubmit: async () => {
            try {
                setLoading(true)
                const data = {
                    service_id: 'service_f80soud',
                    template_id: 'template_7il04ap',
                    user_id: 'HkP2uNnat_NH3rJlL',
                    template_params: {
                        'message': values.message
                    }
                };

                const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
                if (res.data !== 'OK') {
                    alert('Ошибка при отправке данных')
                }
                setLoading(false)
                resetForm()
            }
            catch (err) {
                console.log(err);
            }

        },
    })
    return (
        <section className={styles.feetback}>
            <h2 className={styles.feetback_title}>Обратная связь</h2>
            <Form onSubmit={handleSubmit}>
                <p className={styles.form_title}>Задать вопрос</p>
                <textarea placeholder='Введите текст'></textarea>
                {errors.message && <p className={styles.input_error}>{errors.message}</p>}
                {loading ? <p className={styles.loading}>Sending...</p> :
                    <Button type='submit'>Submit</Button>}
            </Form>
        </section>
    )
}

export default DFeedback