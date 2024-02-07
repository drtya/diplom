import React, { useEffect, useState } from 'react'
import Form from '../UIComponents/Form/Form'
import Button from '../UIComponents/Button/Button'
import styles from './Style.module.scss'
import Input from '../UIComponents/Input/Input'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Feedback = () => {
  const [loading, setLoading] = useState(false)

  const sendMessageSchema = Yup.object().shape({
    email: Yup.string().email('*email введен некорректно').required('*заполните все поля'),
    message: Yup.string().required('*заполните все поля'),
  })
  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      email: '',
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
            'from_name': values.email,
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
    <section className={styles.feetback} id='feedback'>
      <h2 className={styles.feetback_title}>Обратная связь</h2>
      <Form onSubmit={handleSubmit}>
        <p className={styles.form_title}>Задать вопрос</p>
        <Input placeholder='Email' name='email' type='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
        <Input placeholder='Сообщение' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message ? <p className={styles.input_error}>{errors.message}</p> : errors.email ? <p className={styles.input_error}>{errors.email}</p> : ''}
        {loading ? <p className={styles.loading}>Sending...</p> :
          <Button type='submit'>Submit</Button>}
      </Form>
    </section>
  )
}

export default Feedback