import './popup-window.css';
import { Popup } from 'react-leaflet'

function PopUpWindow({ place }) {
  return (
    <>
      <Popup>
        <div className="upper-box">
          <h3>{place.title}</h3>
          </div>
        <div className="popup-container">
          <div className="location-wrapper">
            <p>Latitude: {place.location.latitude}</p>
            <p>Longitude: {place.location.longitude}</p>
          </div>
          <p>Date: {place.date}</p>
          <p>Description: {place.description}</p>
        </div>
    </Popup>
    </>
  );
}

export default PopUpWindow;