import React from 'react'
import styles from './Style.module.scss'
import { useParams } from 'react-router'
const Division = () => {
    const param = useParams()
  return (
    <section className={styles.division+' container'}>
        <h2>Division {param.id}</h2>
    </section>
  )
}

export default Division