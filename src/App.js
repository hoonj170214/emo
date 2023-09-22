import './App.css';
import { Routes, Route } from 'react-router-dom';
import DriverHome from './Pages/DriverHome';
import DriverStation from './Pages/DriverStation';
import DriverSeat from './Pages/DriverSeat';
import SeatList from './Pages/SeatList';
import NoSeat from './Pages/NoSeat';
import YesSeat from './Pages/YesSeat';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<DriverHome />} />
        <Route path='/DriverStation' element={<DriverStation />} />
        <Route path='/DriverSeat' element={<DriverSeat />} />
        <Route path='/SeatList' element={<SeatList />} />
        <Route path='/NoSeat' element={<NoSeat />} />
        <Route path='/YesSeat' element={<YesSeat />} />
      </Routes>
    </div>
  );
}

export default App;
