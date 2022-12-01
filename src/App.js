import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Programms from './components/Programms/Programms';
import { useState } from 'react';
import programmsBanner from './assets/pictures/programms/banner.jpg';
import otherBanner from './assets/pictures/other/banner.jpg';
import { programms, other } from './products.js';

const showMenu = (isActive, setMenuActive) => {
  if (isActive) {
    document.body.classList.remove('no-scroll');
    setMenuActive(false);
  } else {
    document.body.classList.add('no-scroll');
    setMenuActive(true);
  }
};

function App() {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout isMenuActive={isMenuActive} setMenuActive={() => showMenu(isMenuActive, setMenuActive)} />}>
          <Route index element={<Main />} />
          <Route path='programms' element={<Programms slogan='Для кристально чистого автомобиля снаружи и внутри.' banner={programmsBanner} programms={programms} />} />
          <Route path='other' element={<Programms slogan='Запах новой машины.' banner={otherBanner} programms={other} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
