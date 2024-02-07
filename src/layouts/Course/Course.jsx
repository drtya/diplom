import { useNavigate } from 'react-router'
import Button from '../UIComponents/Button/Button'
import styles from './Style.module.scss'
import { useSelector } from 'react-redux'

const Course = () => {
  const userActivate = useSelector((state) => state.UserActivate.value)
  const navigate = useNavigate()
  const clickHandler = (e) => {
    e.preventDefault()

    if (userActivate) {
      navigate('/course/1')
    } else {
      navigate('/signup')
    }
  }
  const courses = [
    {
      "description": "",
      "docs": "",
      "subdivision": [
        {
          "title": "Основные компоненты компьютерной системы",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "История развития компьютеров",
          "description": "",
          "video": "",
          "docs": ""
        }
      ],
      "title": "Введение в компьютерную архитектуру",
      "video": ""
    },
    {
      "description": "",
      "docs": "",
      "subdivision": [
        {
          "title": "Принцип работы ЦПУ",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "Архитектура фон Неймана vs. Гарвардская архитектура",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "Структура и функции устройств ЦПУ",
          "description": "",
          "video": "",
          "docs": ""
        }
      ],
      "title": "Центральный процессор (ЦПУ)",
      "video": ""
    },
    {
      "description": "",
      "docs": "",
      "subdivision": [
        {
          "title": "Иерархия памяти: кэш, RAM, внешняя память",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "Работа с памятью: чтение, запись, адресация",
          "description": "",
          "video": "",
          "docs": ""
        }
      ],
      "title": "Память",
      "video": ""
    },
    {
      "description": "",
      "docs": "",
      "subdivision": [
        {
          "title": "Жесткие диски (HDD) и твердотельные накопители (SSD)",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "Организация файловых систем",
          "description": "",
          "video": "",
          "docs": ""
        },
        {
          "title": "RAID-массивы и их конфигурации",
          "description": "",
          "video": "",
          "docs": ""
        }
      ],
      "title": "Хранение данных",
      "video": ""
    }
  ]





  return (
    <section id='course'>
      <div className={'container'}>
        <h3 className={styles.course_title}>О курсе</h3>
        <div className={styles.course}>
          <div className={styles.course_box}>
            <h4 className={styles.content_title}>Содержание</h4>
            {
              courses.map((div, divIdx) =>
              (
                <div key={div.title} className={styles.course_division}>
                  <p>{divIdx + 1}. {div.title}</p>
                  {

                    div.subdivision.map((subdiv, subdIdx) =>

                      <p className={styles.course_subdivision} key={subdiv.title}>{divIdx + 1}.{subdIdx + 1} {subdiv.title}</p>

                    )
                  }
                  <p className={styles.course_test} key={divIdx}>Тестовое задание №{divIdx + 1}</p>
                </div>
              )
              )
            }
          </div>
          <div className={styles.course_box}>
            <div className={styles.course_info}>
              <p>Автор курса: Касымов Касымалы</p>
              <p>Продолжительность: 20ч. 40мин.</p>
            </div>
            <p className={styles.course_descr}>
              Данный курс погрузит вас в мир компьютерной архитектуры и ОС. И покажет все, начиная от базовых принципов, заканчивая высокотехнологичными системами
            </p>
            <div className={styles.course_btn}>
              <Button onClick={clickHandler}>Приступить</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course