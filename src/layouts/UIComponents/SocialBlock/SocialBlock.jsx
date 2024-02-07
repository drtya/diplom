import React from 'react'
import x from '../../../assets/image/x.svg'
import telegram from '../../../assets/image/telegram.svg'
import whatsapp from '../../../assets/image/whatsapp.svg'
import styles from './Style.module.scss'

const SocialBlock = () => {
  return (
    <div className={styles.social}>
      <a href="https://twitter.com/" target='_blank'><img src={x} className={styles.social_img} alt="x" /></a>
      <a href="https://t.me/daniyar" target='_blank'><img src={telegram} className={styles.social_img} alt="telegram" /></a>
      <a href="https://wa.me/996777777777" target='_blank'><img src={whatsapp} className={styles.social_img} alt="whatsapp" /></a>
    </div>
  )
}

export default SocialBlock