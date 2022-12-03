import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import styles from './Form.module.scss';

export default function Form({ isActive, setActive }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <div className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}>
      <button type='button' className={styles.close} onClick={() => setActive(false)}>Закрыть</button>
      <div className={styles.content}>
        <h4>Записаться</h4>
        <form action="">
          <input type='text' name='name' mask={[/[a-zA-Zа-яА-Я]/]} placeholder='Имя' value={name} onChange={(evt) => setName(evt.target.value)} />
          <MaskedInput name='phone' type='tel' mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholder='+7 (999) 999-99-99' guide={false} value={phone} onChange={(evt) => setPhone(evt.target.value)} />
          <button className={styles.submit}>Записаться</button>
        </form>
        <a href='/#'>Политика конфиденциальности</a>
      </div>
    </div>
  )
}