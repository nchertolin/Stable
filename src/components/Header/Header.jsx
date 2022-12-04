import React from 'react';
import styles from './Header.module.scss';
export default function Header({ isMenuActive, setMenuActive }) {
  return (
    <header>
      {
        isMenuActive ? <button button className={styles.close} onClick={setMenuActive}></button>
          : <button className={styles.menu} onClick={setMenuActive}></button>
      }
    </header >
  )
}
