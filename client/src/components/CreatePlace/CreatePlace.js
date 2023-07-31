
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useGeoLocation from '../../services/GeoLocation';

import './create-place.css';
import { createPlace } from '../../services/ApiService.js';

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
      icon: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    createPlace(formData);
    pushNewPlace(formData);
  }

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
        <h3>create new place</h3>
        <div className="location-wrapper">
          <p>Latitude: <div className="location-data"><p>{formData.location.latitude}</p></div></p>
          <p>Longitude: <div className="location-data"><p>{formData.location.longitude}</p></div></p>
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
            cols={40} // Set the number of visible columns for the textarea
          />
        </div>

        <button className='submit-btn' type="submit">Create</button>

      </form>

    </div>
    </>
  );
}

export default CreatePlace;
