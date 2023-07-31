import CreatePlace from '../components/CreatePlace/CreatePlace.js';
import Map from '../components/Map/Map.js';

function Home({ places, pushNewPlace, updateAfterDelete }) {
  return (
    <>
      <Map
        places={ places }
        updateAfterDelete={ updateAfterDelete }
      />
      <CreatePlace pushNewPlace={ pushNewPlace } />
    </>
  );
}

export default Home;
