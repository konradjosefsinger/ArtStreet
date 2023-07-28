// useGeolocation.js
import { useState, useEffect, useMemo } from 'react';

function useGeoLocation () {

  const [location, setLocation] = useState({
    latitude: 52.5071966,
    longitude: 13.3778324,
    error: null,
  });

  // const defaultLocation = useMemo(() => {
  //   return {
  //     latitude: 52.5071966,
  //     longitude: 13.3778324
  //   };
  // }, []);
  
  useEffect(() => {

    if (!navigator.geolocation) {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by your browser.',
        // latitude: defaultLocation.latitude,
        // longitude: defaultLocation.longitude,
      }));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error: 'Error getting your location: ' + error.message,
            // latitude: defaultLocation.latitude,
            // longitude: defaultLocation.longitude,
          }));
        }
      );
    }
  }, []);

  return location;
};

export default useGeoLocation;