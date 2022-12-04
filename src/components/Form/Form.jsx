import React, { useState } from 'react';
import { useRef } from 'react';
import MaskedInput from 'react-text-mask';
import styles from './Form.module.scss';

const sendRequestToTelegram = (name, phone, onFinally, info, infoError) => {
  const token = '5692087584:AAF5Jt4Wardrkb57J-m-IaWSCvNl3aMh5C4';
  const chatId = -1001639677585;
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${name}, ${phone}`)
    .then((response) => {
      if (response.ok) {
        info.current.classList.remove(styles.hidden);
      } else throw new Error();
    })
    .catch(() => infoError.current.classList.remove(styles.hidden))
    .finally(onFinally);
}

export default function Form({ isActive, setActive }) {
  const resetForm = () => {
    setName('');
    setPhone('');
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const form = useRef(null);
  const submitButton = useRef(null)
  const info = useRef(null);
  const infoError = useRef(null);

  const sendData = (evt) => {
    evt.preventDefault();
    resetForm();
    submitButton.current.disabled = true;
    sendRequestToTelegram(name, phone, () => submitButton.current.disabled = false, info, infoError);
  };

  return (
    <div className={isActive ? `${styles.modal} ${styles.active}` : styles.modal}>
      <button type='button' className={styles.close} onClick={() => {
        resetForm();
        setActive(false)
      }}></button>
      <div className={styles.content}>
        <h4>Записаться</h4>
        <form ref={form} autoComplete='off' onSubmit={sendData}>
          <input type='text' name='name' mask={[/[a-zA-Zа-яА-Я]/]} placeholder='Имя' value={name} onChange={(evt) => setName(evt.target.value)} required minLength='2' />
          <MaskedInput name='phone' type='tel' mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholder='+7 (999) 999-99-99' guide={true} value={phone} onChange={(evt) => setPhone(evt.target.value)} required />
          <button ref={submitButton} className={styles.submit}>Записаться</button>
        </form>
        <a href='/#'>Политика конфиденциальности</a>
      </div>

      <div ref={info} className={`${styles.info} ${styles.hidden}`} onClick={(evt) => evt.target.classList.add(styles.hidden)}>
        <div onClick={evt => evt.stopPropagation()}>
          <span>Скоро с вами свяжется менеджер.</span>
        </div>
      </div>
      <div ref={infoError} className={`${styles.info} ${styles.hidden}`} onClick={(evt) => evt.target.classList.add(styles.hidden)}>
        <div onClick={evt => evt.stopPropagation()}>
          <span>Ошибка отправки формы, попробуйте записатся позже или свяжитесь с нами по телефону</span>
        </div>
      </div>
    </div>
  )
}