import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const setSelected = ({ isActive }) => ({ fontWeight: isActive ? 'bold' : '500' })

export default function Header({ isMenuActive, setMenuActive, isMobile }) {
  return (
    <header>
      <div className={isMobile ? '' : 'hidden'}>
        <button className={isMenuActive ? styles.close : styles.menu} onClick={setMenuActive}></button>
      </div>

      <div className={`${isMobile ? styles.hidden : ''} ${styles.desktopNav}`}>
        <ul className={styles.nav}>
          <li>
            <NavLink id={styles.main} className={styles.link} style={setSelected} to='/'>Главная</NavLink>
          </li>
          <li>
            <NavLink id={styles.programms} className={styles.link} style={setSelected} to='/programms'>Программы</NavLink>
          </li>
          <li>
            <NavLink id={styles.other} className={styles.link} style={setSelected} to='/other'>Дополнительно</NavLink>
          </li>
        </ul>
      </div>
    </header >
  )
}
