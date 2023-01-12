import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import car from '../../assets/icons/programms.svg';
import add from '../../assets/icons/other.svg';

const setActiveLink = ({ isActive }) => isActive ? `${styles.link} + ${styles.active}` : styles.link;

export default function Menu({ isActive, setActive }) {
  return (
    <div className={`${styles.modal} ${isActive ? styles.active : ''}`} >
      <ul className={styles.nav}>
        <li>
          {/* <img src={home} alt="" /> */}
          <NavLink id={styles.main} className={setActiveLink} to='/' onClick={() => setActive(false)}><span>Главная</span></NavLink>
        </li>
        <li>
          {/* <img src={car} alt="" /> */}
          <NavLink id={styles.programms} className={setActiveLink} to='/programms' onClick={() => setActive(false)}>Программы</NavLink>
        </li>
        <li>
          {/* <img src={add} alt="" /> */}
          <NavLink id={styles.other} className={setActiveLink} to='/other' onClick={() => setActive(false)}>Дополнительно</NavLink>
        </li>
        <li>
          <a className={styles.link} href="tel:+79024915450">Позвонить нам</a>
        </li>
        <li>
          <a className={styles.link} href="vk://vk.com/public212864892" target="_blank" rel="noopener noreferrer">Сообщество в VK</a>
        </li>
        <li>
          <a className={styles.link} href='https://yandex.ru/maps/-/CCUjqRqYsB' rel="noopener noreferrer" target="_blank">Мы на карте</a>
        </li>
      </ul>
    </div>
  )
}
