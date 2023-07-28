const baseURL = 'http://127.0.0.1:5050';


/* *** create *** */

function createPlace (place) {
  return fetch(baseURL + '/places/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(place)
  })
  .catch(err => console.log(err));
}


/* *** read *** */

function getPlaces () {
  return fetch(baseURL + '/places/')
    .then(async res => {
      const data = await res.json();
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


module.exports = { createPlace, getPlaces, editPlace, deletePlace }
