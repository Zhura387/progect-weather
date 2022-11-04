
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Statistics from './Pages/Home/Statistics/Statistics';
import Header from './Pages/Shared header/Header'
function App() {
  return (
    <div className='conteiner'>
      <Header/>
<Routes>
  <Route path='/' exact element={<Home/>}/>
  <Route path='Statistics' exact element={<Statistics/>}/>
</Routes>
    </div>
  );
}

export default App;
