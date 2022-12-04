import React from 'react';
import styles from './Contacts.module.scss';
import tel from '../../assets/icons/tel.svg';
import mail from '../../assets/icons/mail.svg';
import geo from '../../assets/icons/geo.svg';

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.content}>
        <h3>Контакты</h3>
        <address className={styles.address}>
          <div className={styles.tel}>
            <img src={tel} alt="" />
            <a href="tel:+79024915450">+7 (902) 491-54-50</a>
          </div>
          <div className={styles.mail}>
            <img src={mail} alt="" />
            <a rel="noopener noreferrer" href="https://vk.com/horse_hm" target="_blank">@horse_hm</a>
          </div>
          <div className={styles.geo}>
            <img src={geo} alt="" />
            <a rel="noopener noreferrer" href='https://yandex.ru/maps/-/CCUjqRqYsB' target="_blank">Ханты-Мансийск, ул. Затонская, 27</a>
          </div>
        </address>
      </div>
      <div className={styles.info}>
        <h3>Режим работы</h3>
        <div className={styles.column}>
          <div className={styles.row}>
            <p>Будни</p>
            <p className={styles.date}>10:00 - 22:00</p>
          </div>
          <div className={styles.row}>
            <p>Выходные</p>
            <p className={styles.date}>10:00 - 20:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
