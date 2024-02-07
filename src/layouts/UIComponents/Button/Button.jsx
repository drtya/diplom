import React from 'react'
import styles from './Style.module.scss'
const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type ? type : 'button'} className={styles.button}>{children}</button>
  )
}

export default Button