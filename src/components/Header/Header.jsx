import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header({ isMenuActive, setMenuActive, isMobile }) {

  const setActive = ({ isActive }) => isActive ? styles.active : '';
  return (
    <header>
      <div className={isMobile ? '' : 'hidden'}>
        <button className={isMenuActive ? styles.close : styles.menu} onClick={setMenuActive}></button>
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
