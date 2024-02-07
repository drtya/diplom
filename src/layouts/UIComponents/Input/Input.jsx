import React from 'react'
import styles from './Style.module.scss'

const Input = ({ placeholder, onChange, value, type, name , onBlur }) => {
    return (
        <input className={styles.input} placeholder={placeholder} onBlur={onBlur} value={value} onChange={onChange} type={type ? type : 'text'} name={name} />
    )
}

export default Input