import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Programms from './components/Programms/Programms';
import { useState, useEffect } from 'react';
import { programms, other } from './products.js';
import first from './assets/videos/1.mp4';
import second from './assets/videos/2.mp4';
import third from './assets/videos/3.mp4';

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
          <Route index element={<Main videos={[first, second, third]} isMobile={isMobile} />} />
          <Route path='programms' element={<Programms pageName='Программы' slogan='Для кристально чистого автомобиля снаружи и внутри.' video={second}
            programms={programms} />} />
          <Route path='other' element={<Programms pageName='Дополнительно' slogan='Запах новой машины.' video={third}
            programms={other} />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
