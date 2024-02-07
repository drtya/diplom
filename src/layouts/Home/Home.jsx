import React from 'react'
import styles from './Style.module.scss'
import arrow from '../../assets/image/bottom_arrow.svg'
const Home = () => {
    return (
        <section className={styles.home} id='home'>
            <div className={styles.home_toner}>
                <div className="container">
                    <div className={styles.home_block}>
                        <h1 className={styles.home_title}>Обучающие курсы по <br /> архитектуре компьютера</h1>
                        <p className={styles.home_subtitle}>Даный курс хронит несколько маленьких подкурсов с <br />видеоуроками и тестами. В ходе прохождения курсов вы узнаете <br />много нового, а также подкрепите свои знания о внутренних и <br />внешних деталях ПК и их функциях.</p>
                        <div className={styles.home_arrow}>
                            <p className={styles.home_arrow_text}>проходи не ленись!</p>
                            <img className={styles.home_arrow_img} src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home