import './App.css';
import { Routes, Route } from 'react-router-dom';
import DriverHome from './Pages/DriverHome';
import DriverStation from './Pages/DriverStation';
import DriverSeat from './Pages/DriverSeat';
import AdminHome from './Pages/AdminHome';
import AdminWorking from './Pages/AdminWorking';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<DriverHome />} />
        <Route path='/driverStation' element={<DriverStation />} />
        <Route path='/driverSeat' element={<DriverSeat />} />
        <Route path='/adminHome' element={<AdminHome />} />
        <Route path='/adminWorking' element={<AdminWorking />} />
      </Routes>
    </div>
  );
}

export default App;
