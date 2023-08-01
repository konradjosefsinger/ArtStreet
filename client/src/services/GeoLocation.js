
import { useState, useEffect } from 'react';

const defaultLocation = {
  latitude: 52.5071966,
  longitude: 13.3778324,
};

function useGeoLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {

    const fetchGeoLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            ...defaultLocation(),
            error: error.message,
          });
        },
        {
          maximumAge: 10000,
        }
      );
    };

    if (!location) {
      fetchGeoLocation();
    }
  }, [location]);

  return location;
}

export default useGeoLocation;