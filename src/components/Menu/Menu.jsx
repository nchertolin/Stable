import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const setSelected = ({ isActive }) => isActive ? styles.selected : '';

export default function Menu({ isActive, setActive }) {
  return (
    <div className={`${styles.modal} ${isActive ? styles.active : ''}`}>
      <ul className={styles.nav}>
        <li>
          <NavLink className={setSelected} to='/' onClick={() => setActive(false)}>Главная</NavLink>
        </li>
        <li>
          <NavLink className={setSelected} to='/programms' onClick={() => setActive(false)}>Программы</NavLink>
        </li>
        <li>
          <NavLink className={setSelected} to='/other' onClick={() => setActive(false)}>Дополнительно</NavLink>
        </li>
      </ul>
    </div>
  )
}
