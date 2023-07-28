import Map from '../components/Map.js'
import './home.css'

function Home() {
  return (
    <>
    <div className='map-container'>
      <div className='map-overlay'></div>
      <Map />
    </div>
    </>
  );
}

export default Home;