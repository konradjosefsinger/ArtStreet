import CreatePlace from '../components/CreatePlace/CreatePlace.js';
import Map from '../components/Map/Map.js';

function Home({ places, pushNewPlace }) {
  return (
    <>
      <Map places={ places } />
      <CreatePlace pushNewPlace={ pushNewPlace } />
    </>
  );
}

export default Home;
