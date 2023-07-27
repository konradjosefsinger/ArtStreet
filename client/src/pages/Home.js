import Map from '../components/Map.js'
import GeoLocation from '../services/GeoLocation.js'
import './home.css'

function Home() {
  return (
    <>
    <div className='map-overlay'></div>
    <div className='map-container'>
      <Map />
    </div>
    <GeoLocation />
    </>
  );
}

export default Home;