import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Layout({ isMenuActive, setMenuActive }) {
  return (
    <div>
      <Header isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      <Outlet />
      <Menu isActive={isMenuActive} setActive={setMenuActive} />
    </div>
  )
}
