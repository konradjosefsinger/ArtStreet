import React, { useState, useEffect } from 'react';

const GeoLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const successCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {latitude && longitude ? (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      ) : (
        <p>Loading location data...</p>
      )}
    </div>
  );
};

export default GeoLocation;