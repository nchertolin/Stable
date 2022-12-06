import { React, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import flag from '../../assets/icons/russia.svg';
import IMask from 'imask';

const sendData = (name, phone, onFinally, info, infoError) => {
  fetch(`https://api.telegram.org/bot5692087584:AAF5Jt4Wardrkb57J-m-IaWSCvNl3aMh5C4/sendMessage?chat_id=-1001639677585&text=${name}, 7 ${phone}`)
    .then((response) => {
      if (response.ok) {
        info.current.classList.remove(styles.hidden);
      } else throw new Error();
    })
    .catch(() => infoError.current.classList.remove(styles.hidden))
    .finally(onFinally);
}

export default function Form({ isActive, setActive }) {
  const { register, formState: { errors, }, getValues, setValue, handleSubmit, reset } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const submitButton = useRef(null)
  const info = useRef(null);
  const infoError = useRef(null);

  const onSubmit = ({ name, phone }) => {
    console.log(getValues());
    submitButton.current.disabled = true;
    sendData(name, phone, () => submitButton.current.disabled = false, info, infoError);
    reset();
    setValue('phone', undefined);
  };

  return (
    <div className={`${styles.modal} ${isActive ? styles.active : ''}`}>
      <button type='button' className={styles.close} onClick={() => {
        reset();
        setActive(false)
      }}></button>
      <div className={styles.content}>
        <h4>Записаться</h4>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.name}>
            <input className={errors?.name ? styles.invalid : ''} {...register('name', {
              required: 'Обязательноe поле.',
              pattern: {
                value: /^[а-яА-Яa-zA-Z]$/i,
                message: "Имя не должно содержать цифр."
              }
            })} placeholder='Имя' />
            {errors?.name && <p className={styles.error}>{errors?.name.message}</p>}
          </div>
          <div className={styles.phone}>
            <div className={`${styles.phoneWrapper} ${errors?.phone ? styles.invalid : ''} `}>
              <div className={styles.country}>
                <img className={styles.flag} src={flag} alt="RU" />
                <span>+7</span>
              </div>
              <input type='tel' {...register('phone', {
                required: 'Обязательноe поле.',
                minLength: {
                  value: 15,
                  message: 'Номер должен содержать 11 цифр.'
                },
                onChange: (evt) => IMask(evt.target, { mask: '(000) 000-00-00' })
              })} placeholder='(900) 000-00-00' />
            </div>
            {errors?.phone && <p className={styles.error}>{errors?.phone.message}</p>}
          </div>
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