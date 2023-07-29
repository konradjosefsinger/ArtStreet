
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { createPlace } from '../../services/ApiService.js';

function CreatePlace() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: {
      latitude: '',
      longitude: '',
    },
    date: '',
    title: '',
    icon: '',
    information: '',
    popUp: '',
    link: '',
    files: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send the data to the server
    // You can use the formData state to access the form values
    console.log(formData);
    // Once the form is submitted, you can redirect the user to another page

    navigate('/'); // Replace '/places' with the desired destination URL
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
      <h3>Create Place</h3>
      <form onSubmit={handleSubmit}>
        {/* Add form elements here */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {/* Add other form fields based on your requirements */}
        <button type="submit">Create Place</button>
      </form>
    </>
  );
}

export default CreatePlace;
