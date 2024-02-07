import React from 'react'
import styles from './Style.module.scss'
const About = () => {
    return (
        <section className={styles.about} id='about'>
            <p className={styles.about_company}>OOO “ThisArchSystem”, 2019</p>
            <h3 className={styles.about_title}>О нас</h3>
            <p className={styles.about_descr}>Мы стремится вдохновить и подготовить следующее поколение IT-специалистов, предоставляя им знания и инструменты для успешной карьеры в области информационных технологий.</p>
        </section>
    )
}

export default About