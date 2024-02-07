import React from 'react'
import styles from './Style.module.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className={styles.error}>
        <h1 className={styles.error_title}>404</h1>
        <p className={styles.error_msg}>page is not found</p>
        <Link to='/' className={styles.error_back}>Вернуться домой</Link>
    </div>
  )
}

export default Error