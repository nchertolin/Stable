import React from 'react'
import styles from './VideoBlock.module.scss';

export default function VideoBlock({ title, slogan, buttonText, video }) {
  return (
    <div className='relative-div'>
      <video src={video} autoPlay loop muted playsInline></video>
      <section className={`${styles.section} abs-centred-section`}>
        <h1>{title}</h1>
        <h2>{slogan}</h2>
        <a className='button' href='/#'>{buttonText}</a>
      </section>
    </div>
  );
}
