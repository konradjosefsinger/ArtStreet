import { useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar'
import AppRouter from './AppRouter';

import * as ApiClient from './services/ApiService';

function App () {

  const [ places, setPlaces ] = useState([]);

  const markers = [
    {
      location: [52, 13],
      popUp: 'YeahYeah',
      icon: './assets/markers/1f340.png'
    },
    {
      location: [52, 14],
      popUp: 'YeahYeah',
      icon: './assets/markers/1f340.png'
    }
  ]
  // setPlaces(markers)

  // useEffect(() => {
  //   ApiClient.getPlaces()
  //   .then(data => {
  //     setPlaces(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, []);

  return (
  <>
    <Navbar />
    <main>
      <AppRouter places={ places } />
    </main>
  </>
  )
}

export default App;
