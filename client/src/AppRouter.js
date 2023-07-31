import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

import Navbar from './components/Navbar/navbar';

function AppRouter ({ places }) {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='about' element={ <About /> } />
        <Route path='home' element={ <Home places={ places } /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='logout' element={ <Logout /> } />
        <Route path='register' element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default AppRouter;
