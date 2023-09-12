import './App.css';
import { Routes, Route, RouterProvider } from 'react-router-dom';
import driverHome from './Pages/driverHome';
import driverStation from './Pages/driverStation';
import driverSeat from './Pages/driverSeat';
import adminHome from './Pages/adminHome';
import adminWorking from './Pages/adminWorking';
function App() {
  return (
    <div className='App'>
      <RouterProvider>
        <Routes>
          <Route path='/' element={driverHome}></Route>
          <Route path='/driverStation' element={driverStation}></Route>
          <Route path='/driverSeat' element={driverSeat}></Route>
          <Route path='/adminHome' element={adminHome}></Route>
          <Route path='/adminWorking' element={adminWorking}></Route>
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default App;
