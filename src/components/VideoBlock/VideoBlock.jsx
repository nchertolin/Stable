import React from 'react'
import { Link } from 'react-router-dom';
import styles from './VideoBlock.module.scss';

export default function VideoBlock({ title, slogan, buttonText, video, setFormActive, to }) {
  return (
    <div className='relative-div'>
      <video className={styles.video} src={video} autoPlay loop muted playsInline></video>
      <section className={`${styles.section} abs-centred-section`}>
        <h1>{title}</h1>
        <h2>{slogan}</h2>
        {buttonText && <Link className='button' to={to} onClick={() => setFormActive ? setFormActive(true) : false}>{buttonText}</Link>}
      </section>
    </div>
  );
}
