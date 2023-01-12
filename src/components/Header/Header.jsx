import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';

export default function Header({ isMenuActive, setMenuActive, isMobile }) {

  const setActive = ({ isActive }) => isActive ? styles.active : '';
  return (
    <header>
      <div className={isMobile ? '' : 'hidden'}>
        <button className={styles.menu} onClick={setMenuActive}>
          <img src={isMenuActive ? close : menu} alt={isMenuActive ? 'Закрыть' : 'Меню'} />
        </button>
      </div>

      <div className={`${isMobile ? styles.hidden : ''} ${styles.desktopNav}`}>
        <ul className={styles.nav}>
          <li>
            <NavLink id={styles.main} className={setActive} to='/'>Главная</NavLink>
          </li>
          <li>
            <NavLink id={styles.programms} className={setActive} to='/programms'>Программы</NavLink>
          </li>
          <li>
            <NavLink id={styles.other} className={setActive} to='/other'>Дополнительно</NavLink>
          </li>
        </ul>
      </div>
    </header >
  )
}
