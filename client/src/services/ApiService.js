const baseURL = 'http://127.0.0.1:5050';


/* *** create *** */

// function createPlace (place) {
//   return fetch(baseURL + '/places/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(place)
//   })
//   .console.log(place)
//   .catch(err => console.log(err));
// }

function createPlace(place) {
  return fetch(baseURL + '/places/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(place)
  })
  .then(response => response.json())
  .then(newPlace => {
    console.log('New place created:', newPlace);
    return newPlace; // Return the newPlace object to the calling code if needed
  })
  .catch(err => console.log(err));
}


/* *** read *** */

function getPlaces () {
  return fetch(baseURL + '/places/')
    .then(async res => {
      const data = await res.json();
      return data;
    })
    .catch(err => console.log(err));
}


/* *** update *** */

function editPlace(id, newData) {
  return fetch(baseURL + '/places/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  })
  .catch((err) => console.log(err));
}


/* *** delete *** */

function deletePlace (id) {
  return fetch(baseURL + /places/ + id, {
    method: "DELETE"
  })
  .catch(err => console.log(err));
};


// // Function to fetch data from the API
// function fetchUfoData() {
//   const url = 'https://data.world/timothyrenner/ufo-sightings/workspace/file?filename=nuforc_reports.json';

//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       return data; // Process the data as needed
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//       return null;
//     });
// }


module.exports = { createPlace, getPlaces, editPlace, deletePlace }
