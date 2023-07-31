import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className='navbar'>
      <Link to="/" className='header'>ArtStreet</Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default Navbar;
