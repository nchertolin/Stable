import React from 'react'
import styles from './Contacts.module.scss';

export default function Contacts({ isMobile }) {
  return (
    <address className={styles.contacts}>
      <a className={styles.geo} rel="noopener noreferrer" href='https://yandex.ru/maps/-/CCUjqRqYsB' target="_blank">Ханты-Мансийск, ул. Затонская 27</a>
      <a className={styles.phone} href="tel:+79024915450">+7 (902) 491-54-50</a>
      <a className={styles.vk} rel="noopener noreferrer" href={isMobile ? 'vk://vk.com/public212864892' : 'https://vk.com/public212864892'} target="_blank">Сообщество в VK</a>
    </address>
  )
}