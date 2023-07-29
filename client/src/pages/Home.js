import Map from '../components/Map/Map.js'
import CreatePlace from '../components/CreatePlace/CreatePlace.js';
import './home.css'

function Home({ places }) {
  return (
    <>
    <div className='map-container'>
      <div className='map-overlay'></div>
      <Map places={ places } />
    </div>
    <CreatePlace />
    </>
  );
}

export default Home;