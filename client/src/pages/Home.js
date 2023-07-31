import CreatePlace from '../components/CreatePlace/CreatePlace.js';
import Map from '../components/Map/Map.js';

function Home({ places }) {
  return (
    <>
      <Map places={ places } />
      <CreatePlace />
    </>
  );
}

export default Home;
