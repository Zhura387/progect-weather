import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Pages/Shared header/Header'
import Popup from './Pages/Shared header/Popup/Popup';



function App() {


  // //  https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=f7d9a1e9d1ca992f7f31ae1dceff8b09

  //https://api.openweathermap.org/data/2.5/forecast?q=minsk&appid=f7d9a1e9d1ca992f7f31ae1dceff8b09&units=metric&lang=ru`


  return (
    <div className='globalConteiner'>
      {/* <Popup/> */}
      <div className='conteiner'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
