import React, { useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import VideoBlock from '../VideoBlock/VideoBlock';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import { menuHandler } from '../../App.js';
export default function Main({ videos }) {
  const [isFormActive, setFormActive] = useState(false);
  return (
    <div className='fullpage-scroll'>
      <HelmetProvider>
        <Helmet>
          <html lang='ru' />
          <meta charSet="utf-8" />
          <title>Премиум автомойка Конюшня</title>
          <meta name="description" content="Полный список профильных услуг высокого качества с использованием премиальной автохимии KochChemie."></meta>
          <meta name="keywords" content="лучшая автомойка ханты-мансийск, конюшня, мойка"></meta>
        </Helmet>
      </HelmetProvider>
      <VideoBlock title='Автомойка Конюшня.' slogan='Приведи своего железного коня в порядок.' buttonText='Записаться' video={videos[0]}
        setFormActive={() => menuHandler(isFormActive, setFormActive)} />
      <VideoBlock slogan='Для кристально чистого автомобиля снаружи и внутри.' buttonText='Показать' video={videos[1]} to='/programms' />
      <VideoBlock title='Наша философия.' slogan='Мы работаем усердно. Мы заботимся. Мы веселимся.' video={videos[2]} />
      <Contacts />
      <Form isActive={isFormActive} setActive={() => menuHandler(isFormActive, setFormActive)} />
    </div>
  )
}
