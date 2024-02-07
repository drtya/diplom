import React from 'react'
import styles from './Style.module.scss'
import SocialBlock from '../UIComponents/SocialBlock/SocialBlock'
const Footer = () => {
    return (
        <footer className={styles.footer + " container"}>
            <div className={styles.footer_info}>
                <div className={styles.footer_info_block}>
                    <p className={styles.footer_info_logo}>Logo</p>
                    <div className={styles.footer_info_contacts}>
                        <p>company@mail.ru</p>
                        <p>+996(777)77-77-77</p>
                    </div>
                </div>
                <SocialBlock/>
            </div>


            <div className={styles.footer_company}>OOO “ThisArchSystem”, 2019</div>
        </footer>
    )
}

export default Footer