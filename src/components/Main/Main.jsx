import React from 'react';
import VideoBlock from '../VideoBlock/VideoBlock';
import Contacts from '../Contacts/Contacts';
import mainVideo from '../../assets/videos/main.mp4';
import serviceVideo from '../../assets/videos/service.mp4';
import aboutVideo from '../../assets/videos/about.mp4';

export default function Main() {
  return (
    <>
      <VideoBlock title='Автомойка Конюшня.' slogan='Приведи своего железного коня в порядок.' buttonText='Записаться' video={mainVideo} />
      <VideoBlock slogan='Для кристально чистого автомобиля снаружи и внутри.' buttonText='Больше услуг' video={serviceVideo} />
      <VideoBlock title='Наша философия.' slogan='Мы работаем усердно. Мы заботимся. Мы веселимся.' buttonText='Подробнее' video={aboutVideo} />
      <Contacts />
    </>
  )
}
