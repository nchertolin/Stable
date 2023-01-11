import React from 'react';
import styles from './Alert.module.scss';
import alert from '../../assets/icons/alert.svg';
export default function Alert({ text }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={alert} alt="" />
        <span>{text}</span>
      </div>
    </div>
  )
}
