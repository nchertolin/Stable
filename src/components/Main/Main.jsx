import React, { useState } from 'react';
import VideoBlock from '../VideoBlock/VideoBlock';
import Contacts from '../Contacts/Contacts';
import mainVideo from '../../assets/videos/main.mp4';
import serviceVideo from '../../assets/videos/service.mp4';
import aboutVideo from '../../assets/videos/about.mp4';
import Form from '../Form/Form';
import { menuHandler } from '../../App.js';

export default function Main() {
  const [isFormActive, setFormActive] = useState(false);
  return (
    <>
      <VideoBlock title='Автомойка Конюшня.' slogan='Приведи своего железного коня в порядок.' buttonText='Записаться' video={mainVideo}
        setFormActive={() => menuHandler(isFormActive, setFormActive)} />
      <VideoBlock slogan='Для кристально чистого автомобиля снаружи и внутри.' buttonText='Показать' video={serviceVideo} to='/programms' />
      <VideoBlock title='Наша философия.' slogan='Мы работаем усердно. Мы заботимся. Мы веселимся.' video={aboutVideo} to='/other' />
      <Contacts />
      <Form isActive={isFormActive} setActive={() => menuHandler(isFormActive, setFormActive)} />
    </>
  )
}
