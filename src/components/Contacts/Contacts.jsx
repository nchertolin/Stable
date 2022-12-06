import React from 'react'
import styles from './Contacts.module.scss';

export default function Contacts() {
  return (
    <address className={styles.contacts}>
      <a className={styles.geo} rel="noopener noreferrer" href='https://yandex.ru/maps/-/CCUjqRqYsB' target="_blank">Ханты-Мансийск, ул. Затонская 27</a>
      <a className={styles.phone} href="tel:+79024915450">+7 (902) 491-54-50</a>
      <a className={styles.vk} rel="noopener noreferrer" href="https://vk.com/horse_hm" target="_blank">Сообщество в VK</a>
    </address>
  )
}
