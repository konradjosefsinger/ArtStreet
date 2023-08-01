import { MapContainer, TileLayer, LayersControl, ZoomControl, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, divIcon } from 'leaflet';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet/dist/leaflet.css';
import './map.css'
import { useRef,useState , useEffect } from 'react';
import useGeoLocation from '../../services/GeoLocation';

import { PopUpWindow, PopUpLocation } from '../PopUp/PopUpWindow';
import FlyToLocation from '../Markers/FlyToLocation';

const { BaseLayer } = LayersControl;


// https://leaflet-extras.github.io/leaflet-providers/preview/

function Map({ places, updateAfterDelete }) {
  
  const Spinner = () => <div className="spinner">Loading...</div>;
  
  let location = useGeoLocation();



  // const [position, setPosition] = useState([]);

  // useEffect(() => {
  //   if (location) {
  //     setPosition([location.latitude, location.longitude]);
  //   }
  // }, [location.latitude, location.longitude]);

  // const handleMarkerDrag = (e) => {
  //   setPosition(e.latlng);
  // };
  
  const mapleLeaf = new Icon ({
    iconUrl: require ('../../assets/markers/maple-leaf_1f341.png'),
    iconSize: [33, 33]
  })
  const heartExclamation = new Icon ({
    iconUrl: require ('../../assets/markers/heart-exclamation_2763-fe0f.png'),
    iconSize: [33, 33]
  })
  const pizzaIcon = new Icon ({
    iconUrl: require ('../../assets/markers/pizza_1f355.png'),
    iconSize: [33, 33]
  })
  const moneyMouthFace = new Icon ({
    iconUrl: require ('../../assets/markers/money-mouth-face_1f911.png'),
    iconSize: [33, 33]
  })
  const pileOfPoo = new Icon ({
    iconUrl: require ('../../assets/markers/pile-of-poo_1f4a9.png'),
    iconSize: [33, 33]
  })

  const orangeMarkerIcon = new Icon ({
    iconUrl: require ('../../assets/markers/Map-Marker-Free-Download-PNG.png'),
    iconSize: [33, 33]
  })
  
  const hatchingChickIcon = new Icon ({
    iconUrl: require ('../../assets/markers/NicePng_chicken-emoji-png_3561061.png'),
    iconSize: [42, 42]
  })

  const getIconForPlace = (place) => {
    const renderIcon = {
      1: mapleLeaf,
      2: heartExclamation,
      3: pizzaIcon,
      4: moneyMouthFace,
      5: pileOfPoo
    };
    return renderIcon[place.icon] || orangeMarkerIcon;
  };
  
  const customClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: [33, 33]
    });
  };
  
  const mapRef = useRef();

  useEffect(() => {
    const { current: map } = mapRef;
    if (map) {
      map.on('fullscreenchange', handleOnToggleFullscreen);
    }
  }, []);

  function handleOnToggleFullscreen() {
    const { current: map } = mapRef;
    if (map) {
      console.log(`Fullscreen: ${map.isFullscreen() ? 'yes' : 'no'}`);
    }
  }

  return (
    <div className='map-component'>

      {!location ? (
        <Spinner />
      ) : (
        <MapContainer
          ref={mapRef}
          fullscreenControl={true}
          center={[location.latitude, location.longitude]}
          zoom={16}
          minZoom={3}
          scrollWheelZoom={true}
          zoomSnap={0}
          zoomControl={false}
          maxBounds={[
            [85, -215],
            [-65, 240],
          ]}
          maxBoundsViscosity={1.0}
        >

          <LayersControl position="bottomleft">
            <BaseLayer checked name="LivingLightly">
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'

              />
            </BaseLayer>
            <BaseLayer name="DarkSoul">
              <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              />
            </BaseLayer>
            <BaseLayer name="Satellite">
              <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
            </BaseLayer>
            <BaseLayer name="Atlas">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </BaseLayer>
          </LayersControl>

          <ZoomControl position="bottomright" zoomInText="➕" zoomOutText="➖" />
  
          <MarkerClusterGroup chunkedLoading iconCreateFunction={customClusterIcon}>
          {places.map((place, i) => (
          <Marker
            key={i}
            icon={getIconForPlace(place)}
            position={[place.location.latitude, place.location.longitude]}
              >
                <PopUpWindow
                  place={ place }
                  updateAfterDelete={ updateAfterDelete }
                />
              </Marker>
              ))}
              <Marker
                name="homeLocation"
                title="let\'s ge started"
                position={[location.latitude, location.longitude]}
                icon={hatchingChickIcon}
                draggable={true}
                // eventHandlers={{
                //   dragend: handleMarkerDrag,
                // }}
              >
                {/* <Popup>
                  <PopUpLocation location={ [position.latitude, position.longitude] } />
                </Popup> */}
              </Marker>


          </MarkerClusterGroup>
          <FlyToLocation />
        </MapContainer>
      )}
    </div>
  );

}

export default Map;