import { useState, useEffect } from 'react';

import AppRouter from './AppRouter';

import * as ApiClient from './services/ApiService';

function App () {

  const [ places, setPlaces ] = useState([]);

  const markers = [
    {
      location: [52, 13],
      popUp: 'YeahYeah',
      icon: '../../assets/markers/1f340.png'
    },
    {
      location: [52, 14],
      popUp: 'YeahYeah',
      icon: '../../assets/markers/1f340.png'
    }
  ]
  // useEffect(() => {
  //   setPlaces(markers)
  // }, []);

  useEffect(() => {
    ApiClient.getPlaces()
    .then(data => {
      setPlaces(data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  function pushNewPlace(place) {
    ApiClient.getPlaces()
      .then((data) => {
        setPlaces([...data, place]);
      })
  }

  function updateAfterDelete(placeId) {
    ApiClient.deletePlace(placeId)
      .then(() => {
        setPlaces((prevPlaces) => prevPlaces.filter((place) => place._id !== placeId))
      })
  }

  return (
  <>
    <main>
      <AppRouter
        places={ places }
        setPlaces={ setPlaces }
        pushNewPlace={ pushNewPlace }
        updateAfterDelete={ updateAfterDelete }
      />
    </main>
  </>
  )
}

export default App;
