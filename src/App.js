import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Programms from './components/Programms/Programms';
import { useState } from 'react';
import programmsBanner from './assets/pictures/programms/banner.jpg';
import programmsBannerMobile from './assets/pictures/programms/mobile/banner.jpg';
import otherBanner from './assets/pictures/other/banner.jpg';
import otherBannerMobile from './assets/pictures/other/mobile/banner.jpg';
import { programms, other } from './products.js';

export const menuHandler = (isActive, setMenuActive) => {
  if (isActive) {
    document.body.classList.remove('no-scroll');
    setMenuActive(false);
  } else {
    document.body.classList.add('no-scroll');
    setMenuActive(true);
  }
};

function App({ isMobile }) {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout isMenuActive={isMenuActive} setMenuActive={() => menuHandler(isMenuActive, setMenuActive)} isMobile={isMobile} />}>
          <Route index element={<Main />} />
          <Route path='programms' element={<Programms slogan='Для кристально чистого автомобиля снаружи и внутри.' banner={isMobile ? programmsBannerMobile : programmsBanner}
            programms={programms} />} />
          <Route path='other' element={<Programms slogan='Запах новой машины.' banner={isMobile ? otherBannerMobile : otherBanner}
            programms={other} />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
