// import React, { useState } from 'react';
// import { Marker, Popup, useMap } from 'react-leaflet';

// function FlyToLocation({ location }) {

//   const [position, setPosition] = useState(null);
//   const map = useMap();

//   const handleFlyToLocation = () => {
//     if (location.latitude && location.longitude) {
//       const latLng = [location.latitude, location.longitude];
//       setPosition(latLng);
//       map.flyTo(latLng, map.getZoom());
//     }
//   };
  
//   React.useEffect(() => {
//     if (location.latitude && location.longitude) {
//       setPosition([location.latitude, location.longitude]);
//     }
//   }, [location.latitude, location.longitude]);

//   return (
//     <>
//       {position && (
//         <Marker position={position}>
//           <Popup>You are here</Popup>
//         </Marker>
//       )}
//       <button onClick={handleFlyToLocation}>Fly to Geolocation</button>
//     </>
//   );
// }

// export default FlyToLocation;
