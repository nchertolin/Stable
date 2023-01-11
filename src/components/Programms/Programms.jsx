import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { v4 } from 'uuid';
import Product from '../Product/Product';
import VideoBlock from '../VideoBlock/VideoBlock';
import styles from './Programms.module.scss';


export default function Programms({ pageName, slogan, programms, video }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <html lang='ru' />
          <meta charSet="utf-8" />
          <title>Конюшня — {pageName}</title>
          <meta name="keywords" content="трехфазная мойка, комплексная, уборка салона, химчистка, сухой туман, экотуман, мойки, программы"></meta>
        </Helmet>
      </HelmetProvider>
      <VideoBlock slogan={slogan} video={video} />
      <div className={styles.programms}>
        {programms.map(({ title, picture, prices, times, description }) => <Product key={v4()} title={title}
          picture={picture} prices={prices} times={times} description={description} />)}
      </div >
    </>
  );
}
