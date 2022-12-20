import React from 'react';
import { Helmet } from "react-helmet";
import { v4 } from 'uuid';
import PictureBlock from '../PictureBlock/PictureBlock';
import Product from '../Product/Product';
import styles from './Programms.module.scss';

export default function Programms({ slogan, programms, banner }) {
  return (
    <div>
      <Helmet>
        <html lang='ru' />
        <meta charSet="utf-8" />
        <title>{window.location.pathname === '/programms' ? 'Программы' : 'Дополнительно'}</title>
        <meta name="keywords" content="трехфазная мойка, комплексная, уборка салона, химчистка, сухой туман, экотуман, мойки, программы"></meta>
      </Helmet>
      <PictureBlock slogan={slogan} picture={banner} />
      <div className={styles.programms}>
        {programms.map(({ title, picture, prices, times, description }) => <Product key={v4()} title={title}
          picture={picture} prices={prices} times={times} description={description} />)}
      </div >
    </div>
  );
}
