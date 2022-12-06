import React from 'react';
import styles from './Header.module.scss';
export default function Header({ isMenuActive, setMenuActive }) {
  return (
    <header>
      <button className={isMenuActive ? styles.close : styles.menu} onClick={setMenuActive}></button>
    </header >
  )
}
