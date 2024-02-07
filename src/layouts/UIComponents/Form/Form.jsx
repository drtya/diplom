import React from 'react'
import styles from './Style.module.scss'
const Form = ({children,onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>{children}</form>
  )
}

export default Form