import React from 'react';
import styles from './Contacts.module.scss';
import tel from '../../assets/icons/tel.svg';
import mail from '../../assets/icons/mail.svg';
import geo from '../../assets/icons/geo.svg';

export default function Contacts() {
  return (
    <div>
      <h3>Контакты</h3>
      <address className={styles.address}>
        <div className={styles.tel}>
          <img src={tel} alt="" />
          <a className='' href="tel:+79024915450">+7 (902) 491-54-50</a>
        </div>
        <div className={styles.mail}>
          <img src={mail} alt="" />
          <a className='' href="mailto:mal">horse.hm@gmail.com</a>
        </div>
        <div className={styles.geo}>
          <img src={geo} alt="" />
          <p>Ханты-Мансийск, ул. Затонская, 27</p>
        </div>
      </address>
    </div>
  )
}
