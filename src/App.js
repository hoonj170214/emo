import './App.css';
import { Routes, Route } from 'react-router-dom';
import driverHome from './Pages/driverHome';
import driverStation from './Pages/driverStation';
import driverSeat from './Pages/driverSeat';
import adminHome from './Pages/adminHome';
import adminWorking from './Pages/adminWorking';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<driverHome />} />
        <Route path='/driverStation' element={<driverStation />} />
        <Route path='/driverSeat' element={<driverSeat />} />
        <Route path='/adminHome' element={<adminHome />} />
        <Route path='/adminWorking' element={<adminWorking />} />
      </Routes>
    </div>
  );
}

export default App;
