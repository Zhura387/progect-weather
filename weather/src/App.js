
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Statistics from './Pages/Home/Statistics/Statistics';
import Header from './Pages/Shared header/Header'
import Popup from './Pages/Shared header/Popup/Popup';
function App() {
  return (
    <div className='globalConteiner'>
      <Popup/>
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
