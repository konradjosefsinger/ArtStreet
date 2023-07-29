import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'
import { useState, useEffect } from 'react';
import useGeoLocation from '../../services/GeoLocation';

function Map({ places }) {
  
  let location = useGeoLocation();

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   useGeoLocation()
  // })

  const customIcon = new Icon ({
    iconUrl: require ('../../assets/markers/1f340.png'),
    iconSize: [33, 33]
  })
  
  
  const markers = [
    {
      location: [52, 13],
      popUp: 'YeahYeah',
      icon: customIcon
    },
    {
      location: [52, 14],
      popUp: 'YeahYeah',
      icon: customIcon
    }
  ]
  // const defaultLocation = {
    //   latitude: 52.5071966,
    //   longitude: 13.3778324,
    // }

    const customClusterIcon = (cluster) => {
      return new divIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: [33, 33]
      });
    };

  const Spinner = () => <div className="spinner">Loading...</div>;

  return (
    <> {
      !location ? (
        <Spinner />
      ) : (
      <MapContainer
        center={ [location.latitude, location.longitude] }
        zoom={16}
        minZoom={2}
        scrollWheelZoom={true}
        maxBounds={[
          [90, -215],
          [-77, 240],
        ]}
        maxBoundsViscosity={1.0}>
        {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={customClusterIcon}>
          {/* {places.map((place, i) => (
            <Marker key={i} position={place.location} icon={place.icon} ></Marker>
          ))} */}
        </MarkerClusterGroup>

      </MapContainer>
      )}
    </>
  )
}

export default Map;