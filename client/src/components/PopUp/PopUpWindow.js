import './popup-window.css';
import { Popup } from 'react-leaflet'

import { dateShort, formatDate } from '../../services/dateFormats.js';

import { deletePlace } from '../../services/ApiService.js'

function PopUpWindow({ place, updateAfterDelete }) {

  const handleDelete = () => {
    const placeId = place._id;
    deletePlace(placeId);
    updateAfterDelete(placeId);
  };

  return (
    <>
      <Popup>
        <div className="upper-box">
            <div><p>Latitude: <div className="location-data"><p>{place.location.latitude}</p></div></p></div>
            <div><p>Longitude: <div className="location-data"><p>{place.location.longitude}</p></div></p></div>
        </div>
        <div className="popup-container">
          <h3 className="popup-header">{place.title}</h3>
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

export default PopUpWindow;