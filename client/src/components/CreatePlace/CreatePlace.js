
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useGeoLocation from '../../services/GeoLocation';

import './create-place.css';
import { createPlace } from '../../services/ApiService.js';

import icon1 from "../../assets/markers/maple-leaf_1f341.png";
import icon2 from "../../assets/markers/heart-exclamation_2763-fe0f.png";
import icon3 from "../../assets/markers/pizza_1f355.png";
import icon4 from "../../assets/markers/money-mouth-face_1f911.png";
import icon5 from "../../assets/markers/pile-of-poo_1f4a9.png";

  function CreatePlace({ pushNewPlace }) {

    let geoLocation = useGeoLocation();
    // // const navigate = useNavigate();
    // const defaultLatitude = 52.5071966;
    // const defaultLongitude = 13.3778324;

    const [formData, setFormData] = useState({
      location: {
        latitude: 0,
        longitude: 0,
      },
      date: new Date(Date.now()).toISOString().slice(0, 16).split('.').join('/'),
      title: '',
      icon: 0,
      description: '',
      popUp: '',
      link: '',
      files: [],
    });

    useEffect(() => {
      if (geoLocation && geoLocation.latitude && geoLocation.longitude) {
        setFormData((prevData) => ({
          ...prevData,
          location: {
            latitude: geoLocation.latitude,
            longitude: geoLocation.longitude,
          },
        }));
      }
    }, [geoLocation]);
    
    const [selectedIcon, setSelectedIcon] = useState(null);
  
    const handleIconClick = (iconId) => {
      setSelectedIcon(iconId);
      setFormData((prevData) => ({
        ...prevData,
        icon: iconId
      }))
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(formData);
      createPlace(formData);
      pushNewPlace(formData);
      console.log(formData.icon)

      setFormData((prevFormData) => ({
        ...prevFormData,
        title: '',
        icon: 0,
        description: ''
      }));
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };


    return (
      <>
      <div className="create-wrapper">

        <div className="form-top-wrapper">

        <div className="marker-selection-wrapper">
        <h3 onClick={handleSubmit}>create new place</h3>
        <ul className="marker-selection">
          <li className={`marker-id-1 ${selectedIcon === 1 ? "selected" : ""}`}>
            <button onClick={() => handleIconClick(1)}>
              <img src={icon1} alt="1" width="29" height="29" />
            </button>
          </li>
          <li className={`marker-id-2 ${selectedIcon === 2 ? "selected" : ""}`}>
            <button onClick={() => handleIconClick(2)}>
              <img src={icon2} alt="2" width="27" height="27" />
            </button>
          </li>
          <li className={`marker-id-3 ${selectedIcon === 3 ? "selected" : ""}`}>
            <button onClick={() => handleIconClick(3)}>
              <img src={icon3} alt="3" width="27" height="27" />
            </button>
          </li>
          <li className={`marker-id-4 ${selectedIcon === 4 ? "selected" : ""}`}>
            <button onClick={() => handleIconClick(4)}>
              <img src={icon4} alt="3" width="27" height="27" />
            </button>
          </li>
          <li className={`marker-id-5 ${selectedIcon === 5 ? "selected" : ""}`}>
            <button onClick={() => handleIconClick(5)}>
              <img src={icon5} alt="3" width="27" height="27" />
            </button>
          </li>
        </ul>
      </div>

        <div className="location-wrapper">
          <p>Latitude: </p><p className="location-data">{formData.location.latitude}</p>
          <p>Longitude: </p><p className="location-data">{formData.location.longitude}</p>
        </div>

      </div>

      <form className='new-place' onSubmit={handleSubmit}>

        <div className='place-title'>
          <input
            placeholder='Title'
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className='form-description'>
          <textarea
            placeholder='Description'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4} // Set the number of visible rows for the textarea
            cols={36} // Set the number of visible columns for the textarea
          />
        </div>

          <button className='submit-btn' type="submit">create</button>

      </form>

    </div>
    </>
  );
}

export default CreatePlace;
