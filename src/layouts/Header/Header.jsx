import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Style.module.scss'
import { useLocation, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { disabled } from '../../store/userActivate'

const Header = () => {
    const userActivate = useSelector((state) => state.UserActivate.value) // Стейт, который смотрит на автризацию польователя и отрисовывает меню хедера 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [modal, setModal] = useState(false) // Стейт, который открывает модальное окно
    const mainMenu = [
        {
            title: 'Главная',
            path: '#home'
        },
        {
            title: 'О нас',
            path: '#about'
        },
        {
            title: 'Курсы',
            path: '#course'
        },
        {
            title: 'Связаться с нами',
            path: '#feedback'
        }
    ]
    const dashboardMenu = [
        {
            title: 'Главная',
            path: '/home'
        },
        {
            title: 'Курсы',
            path: '/course'
        },
        {
            title: 'Связаться с нами',
            path: '/feedback'
        }
    ]
    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(disabled())
        navigate('/')
    }

    return (
        <>
            <header className={`${styles.header} container`}>
                <Link to='/' className={styles.header_logo}>Logo</Link>
                {
                    !userActivate ?
                        <>
                            <div className={styles.header_list}>
                                {
                                    mainMenu.map((menu) =>
                                        pathname === '/' ?
                                            <a key={menu.title} href={menu.path} className={styles.header_list_el}>{menu.title}</a>
                                            :
                                            <Link key={menu.title} to='/' className={styles.header_list_el}>{menu.title}</Link>
                                    )
                                }
                            </div>
                            <div className={styles.header_start}>
                                <Link to='/login' className={styles.header_login}>Войти</Link>
                                <Link to='/signup' className={styles.header_signup}>Зарегистрироваться</Link>
                            </div>
                            <div className={styles.header_burger} onClick={(e) => { e.preventDefault(); setModal(true) }}>
                                <div className={styles.header_burger_top}></div>
                                <div className={styles.header_burger_middle}></div>
                                <div className={styles.header_burger_bottom}></div>
                            </div>
                            {
                                modal &&
                                <div className={styles.header_overlay} onClick={(e) => { e.preventDefault(); setModal(false) }}>
                                    <div className={styles.header_modal} onClick={(e) => { e.stopPropagation() }}>
                                        {
                                            mainMenu.map((menu) =>
                                                pathname === '/' ?
                                                    <a key={menu.title} href={menu.path} className={styles.header_list_el}>{menu.title}</a>
                                                    :
                                                    <Link key={menu.title} to='/' className={styles.header_list_el}>{menu.title}</Link>
                                            )
                                        }
                                        <div className={styles.header_modal_start}>
                                            <Link to='/login' className={styles.header_login}>Войти</Link>
                                            <Link to='/signup' className={styles.header_signup}>Зарегистрироваться</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                        :
                        <>
                            <div className={styles.header_list}>
                                {
                                    dashboardMenu.map((menu) =>
                                        <Link key={menu.title} to={menu.path} className={styles.header_list_el}>{menu.title}</Link>
                                    )
                                }
                            </div>
                            <div className={styles.header_start}>
                                <a onClick={logoutHandler} className={styles.header_login}>Выйти</a>
                                <Link to='/profile' className={styles.header_profile}>
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="19" cy="19" r="18" stroke="white" stroke-width="2" />
                                        <path className={styles.path} d="M25.6 13.933C25.6 17.5781 22.6451 20.533 19 20.533C15.3549 20.533 12.4 17.5781 12.4 13.933C12.4 10.2879 15.3549 7.33301 19 7.33301C22.6451 7.33301 25.6 10.2879 25.6 13.933Z" stroke="white" stroke-width="2" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2047 30.3999C31.7232 24.4493 25.8501 20.2666 19.0001 20.2666C12.1501 20.2666 6.27696 24.4493 3.79541 30.3999H5.98975C8.33832 25.5844 13.2817 22.2666 19.0001 22.2666C24.7184 22.2666 29.6618 25.5844 32.0104 30.3999H34.2047Z" fill="white" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={styles.header_burger} onClick={(e) => { e.preventDefault(); setModal(true) }}>
                                <div className={styles.header_burger_top}></div>
                                <div className={styles.header_burger_middle}></div>
                                <div className={styles.header_burger_bottom}></div>
                            </div>
                            {
                                modal &&
                                <div className={styles.header_overlay} onClick={(e) => { e.preventDefault(); setModal(false) }}>
                                    <div className={styles.header_modal} onClick={(e) => { e.stopPropagation() }}>
                                        {
                                            dashboardMenu.map((menu) =>
                                                <Link key={menu.title} to={menu.path} className={styles.header_list_el}>{menu.title}</Link>
                                            )
                                        }
                                        <div className={styles.header_modal_start}>
                                            <a onClick={logoutHandler} className={styles.header_login}>Выйти</a>
                                            <Link to='/profile' className={styles.header_profile}>
                                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="19" cy="19" r="18" stroke="white" stroke-width="2" />
                                                    <path className={styles.path} d="M25.6 13.933C25.6 17.5781 22.6451 20.533 19 20.533C15.3549 20.533 12.4 17.5781 12.4 13.933C12.4 10.2879 15.3549 7.33301 19 7.33301C22.6451 7.33301 25.6 10.2879 25.6 13.933Z" stroke="white" stroke-width="2" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2047 30.3999C31.7232 24.4493 25.8501 20.2666 19.0001 20.2666C12.1501 20.2666 6.27696 24.4493 3.79541 30.3999H5.98975C8.33832 25.5844 13.2817 22.2666 19.0001 22.2666C24.7184 22.2666 29.6618 25.5844 32.0104 30.3999H34.2047Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                }
            </header>
            <hr className={styles.border_bottom} />
        </>
    )
}

export default Header