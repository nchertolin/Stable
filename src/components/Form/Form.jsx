import { React, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './Form.module.scss';
import flag from '../../assets/icons/russia.svg';
import { sendData } from '../../api.js';
import MaskedInput from 'react-text-mask';

export default function Form({ isActive, setActive }) {
  const { register, formState: { errors, }, handleSubmit, reset, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const submitButton = useRef()
  const succsessMessage = useRef();
  const errorMessage = useRef();

  const showMessage = (element) => {
    element.classList.remove(styles.hidden)
    setTimeout(() => {
      element.classList.add(styles.hidden)
    }, 5000)
  };

  const onSubmit = ({ name, phone }) => {
    submitButton.current.disabled = true;
    sendData(name, phone, () => showMessage(succsessMessage.current), () => showMessage(errorMessage.current),
      () => submitButton.current.disabled = false);
    reset();
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
            <input type='text' className={errors?.name ? styles.invalid : ''} {...register('name', {
              required: 'Обязательноe поле.',
              pattern: {
                value: /[а-яА-яa-zA-Z]/,
                message: "Имя должно содержать только буквы."
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
              <Controller
                control={control}
                name='phone'
                rules={{
                  required: 'Обязательноe поле.',
                  minLength: {
                    value: 15,
                    message: 'Номер должен содержать 11 цифр.'
                  }
                }}
                render={({ field }) => (
                  <MaskedInput
                    type='tel'
                    className={styles.tel}
                    mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    placeholder='(900) 000-00-00'
                    maxLength={15}
                    guide={false}
                    onChange={evt => field.onChange(evt)}
                    value={field.value}
                  />
                )}
              />
            </div>
            {errors?.phone && <p className={styles.error}>{errors?.phone.message}</p>}
          </div>
          <button ref={submitButton} className={styles.submit}>Записаться</button>
        </form>
        <p>Ханты-Мансйиск, Затонская 27</p>
        <p>Персональные данные не будут переданы третьим лицам.</p>
      </div>

      <div ref={succsessMessage} className={`${styles.info} ${styles.hidden}`}>
        <div onClick={evt => evt.stopPropagation()}>
          <span>Скоро с вами свяжется менеджер.</span>
        </div>
      </div>

      <div ref={errorMessage} className={`${styles.info} ${styles.hidden}`}>
        <div onClick={evt => evt.stopPropagation()}>
          <span>Ошибка отправки формы, попробуйте записатся позже или свяжитесь с нами по телефону</span>
        </div>
      </div>

    </div>
  )
}