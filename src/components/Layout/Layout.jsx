import React from 'react';
import { Outlet } from 'react-router-dom';
import Alert from '../Alert/Alert';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Layout({ isMenuActive, setMenuActive, isMobile }) {
  return (
    <div>
      {/* <Alert text='Новогодние праздники. Режим работы изменился: 1 - 9 января выходные дни.' /> */}
      <Header isMenuActive={isMenuActive} setMenuActive={setMenuActive} isMobile={isMobile} />
      <Outlet />
      <Menu isActive={isMenuActive} setActive={setMenuActive} />
    </div>
  )
}
