import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'
// import useGeoLocation from '../services/GeoLocation';

function Map() {

  //const location = useGeoLocation();
  //console.log(location) // output: {latitude: 52.5071943, longitude: 13.3778364, error: null}
  //const mapCenter = [location.latitude, location.longitude];
  //console.log(mapCenter);

  const defaultLocation = {
    latitude: 52.5071966,
    longitude: 13.3778324,
  }

  const customIcon = new Icon ({
    iconUrl: require ('../../assets/markers/1f340.png'),
    iconSize: [38, 38]
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

  return (
    <>
      <MapContainer center={ [defaultLocation.latitude, defaultLocation.longitude] } zoom={16} scrollWheelZoom={true}>
        {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.location} icon={marker.icon} ></Marker>
        ))}

      </MapContainer>
    </>
  )
}

export default Map;