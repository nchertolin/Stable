import React from 'react';
import styles from './Header.module.scss';
import menu from '../../assets/icons/menu.svg';

export default function Header({ setMenuActive }) {
  return (
    <header>
      <button className={styles.menu} onClick={setMenuActive}>
        <img src={menu} alt="" />
      </button>
    </header>
  )
}
