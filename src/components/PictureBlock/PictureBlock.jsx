import React from 'react';
import styles from './PictureBlock.module.scss';

export default function PictureBlock({ picture, slogan }) {
  return (
    <div className='relative-div'>
      <img className={styles.banner} src={picture} alt=''></img>
      <section className={`${styles.section} abs-centred-section`}>
        <h2 className>{slogan}</h2>
        {/* <a className='button' href='/#'>Записаться</a> */}
      </section>
    </div>
  )
}
