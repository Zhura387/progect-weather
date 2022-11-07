import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Statistics from './Pages/Home/Statistics/Statistics';
import Header from './Pages/Shared header/Header'
import Popup from './Pages/Shared header/Popup/Popup';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addWeather } from './Redux/Slices/weatherSlice';



function App() {
  const dispatch = useDispatch()
  const [appState, setAppState] = React.useState();

  //  https://api.openweathermap.org/data/2.5/weather?q=minsk&appid=f7d9a1e9d1ca992f7f31ae1dceff8b09
  
  React.useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=minsk&units=metric&lang=ru&appid=f7d9a1e9d1ca992f7f31ae1dceff8b09`)
          .then((resp) => {
              setAppState(resp.data);
              dispatch(addWeather(appState))
          });
  }, [setAppState]);
  // console.log(appState)


  return (
    <div className='globalConteiner'>
      {/* <Popup/> */}
      <div className='conteiner'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='Statistics' exact element={<Statistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
