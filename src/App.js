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
        <Route path='/DriverStation' element={<DriverStation />} />
        <Route path='/DriverSeat' element={<DriverSeat />} />
        <Route path='/AdminHome' element={<AdminHome />} />
        <Route path='/AdminWorking' element={<AdminWorking />} />
      </Routes>
    </div>
  );
}

export default App;
