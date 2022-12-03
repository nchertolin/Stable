import React, { useRef } from 'react'
import styles from './Product.module.scss';
import { v4 } from 'uuid';

const showDesription = (contentRef, descriptionRef, buttonRef) => {
  buttonRef.current.textContent = descriptionRef.current.classList.contains('hidden') ? 'Скрыть' : 'Описание';
  descriptionRef.current.classList.toggle('hidden');
  contentRef.current.classList.toggle('hidden');
};

export default function Product({ title, picture, prices, description }) {
  const contentRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  return (
    <div className={styles.picture} style={{ background: `url(${picture}) no-repeat`, backgroundSize: '100%' }}>
      <div className={styles.content}>
        <div className={styles.inner} ref={contentRef} >
          <p className={styles.title}>{title}</p>
          <ul className={styles.price}>
            {prices.map((price, index) =>
              <li key={v4()}>
                {/* <span key={v4()}>{index + 1}<br />класс</span> */}
                <span className={styles.cost} key={v4()}>{price}</span>
              </li>
            )}
          </ul>
        </div>
        <div ref={descriptionRef} className={`${styles.description} hidden`}>{description}</div>
        <button ref={buttonRef} className={styles.button}
          onClick={() => showDesription(contentRef, descriptionRef, buttonRef)}>Описание</button>
      </div>
    </div>
  )
}
