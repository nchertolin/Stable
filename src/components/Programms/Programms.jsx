import React from 'react';
import { v4 } from 'uuid';
import PictureBlock from '../PictureBlock/PictureBlock';
import Product from '../Product/Product';
import styles from './Programms.module.scss';

export default function Programms({ slogan, programms, banner }) {
  return (
    <div>
      <PictureBlock slogan={slogan} picture={banner} />
      <div className={styles.programms}>
        {programms.map(({ title, picture, prices, description }) => <Product key={v4()} title={title} picture={picture} prices={prices} description={description} />)}
      </div >
    </div>
  );
}
