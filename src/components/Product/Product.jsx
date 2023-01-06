import React, { useRef } from 'react'
import styles from './Product.module.scss';
import { v4 } from 'uuid';

const showDesription = (contentRef, descriptionRef, buttonRef) => {
  buttonRef.current.textContent = descriptionRef.current.classList.contains('hidden') ? 'Скрыть' : 'Описание';
  descriptionRef.current.classList.toggle('hidden');
  contentRef.current.classList.toggle('hidden');
};

export default function Product({ title, picture, prices, times, description }) {
  const contentRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  return (
    <div className={styles.picture} style={{ background: `no-repeat center/100% 100% url(${picture})` }}>
      <div className={styles.content}>
        <div className={styles.inner} ref={contentRef}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.price}>
            {(prices.length !== 0) ? prices.map((price, index) =>
              <li key={v4()}>
                <span className={styles.class} key={v4()}>{index + 1} класс</span>
                <span className={styles.cost} key={v4()}>{price}</span>
              </li>
            ) : <li><span>Стоимость вычисляется при осмотре</span></li>}
          </ul>
          <span className={styles.time}>{times[0]} — {times[1]}</span>
        </div>
        <div className={`${styles.description} hidden`} ref={descriptionRef}>
          <ul className={styles.descriptionList}>
            {description.map(sentence => <li key={v4()}>{sentence}</li>)}
          </ul>
        </div>
        <button className={styles.button} ref={buttonRef} onClick={() => showDesription(contentRef, descriptionRef, buttonRef)}>Описание</button>
      </div>
    </div>
  )
}
