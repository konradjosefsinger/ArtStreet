import './popup-window.css';
import { Popup } from 'react-leaflet'

import { formatDate } from '../../services/dateFormats.js';

import { deletePlace } from '../../services/ApiService.js'

function PopUpWindow({ place, updateAfterDelete }) {

  const handleDelete = () => {
    const placeId = place._id;
    deletePlace(placeId);
    updateAfterDelete(placeId);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft = 0;
  };

  return (
    <>
      <Popup>
        <div className="upper-box">
            <div><p>Latitude: </p><p className="location-data">{place.location.latitude}</p></div>
            <div><p>Longitude: </p><p className="location-data">{place.location.longitude}</p></div>
        </div>
        <div className="popup-container">
          <h3 className="popup-header" onScroll={handleScroll}>{place.title}</h3>
          <p className="description">{place.description}</p>
          <div className="bottom-line">
            <p className="date-format">{ formatDate(place.date) }</p>
            <div className="control-buttons">
              <button className="edit-btn" type="button">Edit</button>
              <button className="delete-btn" type="button" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
    </Popup>
    </>
  );
}

function PopUpLocation({ location }) {
  return (
    <>
      <div className="upper-box">
          <div><p>Latitude: <div className="location-data"><p>{location.latitude}</p></div></p></div>
          <div><p>Longitude: <div className="location-data"><p>{location.longitude}</p></div></p></div>
      </div>
    </>
  )
}

export { PopUpWindow, PopUpLocation };