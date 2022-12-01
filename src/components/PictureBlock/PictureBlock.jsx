import React from 'react';
import styles from './PictureBlock.module.scss';

export default function PictureBlock({ picture, slogan }) {
  return (
    <div className='relative-div'>
      <img className={styles.banner} src={picture} alt=''></img>
      <h2 className={`${styles.section} abs-centred-section`}>{slogan}</h2>
    </div>
  )
}
