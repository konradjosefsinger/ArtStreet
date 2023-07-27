import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Update from './pages/Update';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='about' element={ <About /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='logout' element={ <Logout /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='update' element={ <Update /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
