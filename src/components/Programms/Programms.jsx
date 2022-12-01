import React from 'react';
import { v4 } from 'uuid';
import PictureBlock from '../PictureBlock/PictureBlock';
import Product from '../Product/Product';

export default function Programms({ slogan, programms, banner }) {
  return (
    <div>
      <PictureBlock slogan={slogan} picture={banner} />
      {programms.map(({ title, picture, prices, description }) => <Product key={v4()} title={title} picture={picture} prices={prices} description={description} />)}
    </div>
  );
}
