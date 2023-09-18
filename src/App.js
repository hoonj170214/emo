import './App.css';
import { Routes, Route } from 'react-router-dom';
import DriverHome from './Pages/DriverHome';
import DriverStation from './Pages/DriverStation';
import DriverSeat from './Pages/DriverSeat';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<DriverHome />} />
        <Route path='/DriverStation' element={<DriverStation />} />
        <Route path='/DriverSeat' element={<DriverSeat />} />
      </Routes>
    </div>
  );
}

export default App;
