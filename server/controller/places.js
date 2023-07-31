const Place = require('../../database/Place');


/* *** CREATE *** */

async function createPlace (req, res) {
  try {
    const data = req.body;
    const newPlace = await Place.create({
      title: data.title,              // required
      date: data.date,                // required
      location: data.location,        // required
      icon: data.icon,                // required
      description: data.description,  // _optional
      popUp: data.popUp,              // _optional
      link: data.link,                // _optional
      files: data.files               // _optional
    });
    res.status(201);  // 201 created
    res.send(newPlace);
  }
  catch (err) {
    res.status(400);  // 400 bad request
    res.send(err);
  }
}


/* *** READ *** */

async function getPlaces (req, res) {
  try {
    const data = await Place.find({});
    res.status(200);  // 200 OK
    res.send(data);
  }
  catch (err) {
    res.status(400);  // 400 bad request
    res.send(err);
  }
}

/* *** READ ONE BY ID *** */

async function getPlaceById(req, res) {
  try {
    const placeId = req.params.id;
    const place = await Place.findById(placeId);
    if (!place) {
      res.status(404).send('Place not found'); // 404 not found
      return;
    }
    res.status(200).send(place); // 200 OK
  } catch (err) {
    res.status(500).send(err.message); // 500 internal server error
  }
}



/* *** UPDATE *** */

async function editPlace(req, res) {
  try {
    const placeId = req.params.id;
    const newData = req.body;

    const existingPlace = await Place.findById(placeId);
    if (!existingPlace) {
      res.status(404).send('Place not found');  // 404 not find
      return;
    }
    existingPlace.title = newData.title || existingPlace.title;
    existingPlace.description = newData.description || existingPlace.description;
    existingPlace.link = newData.link || existingPlace.link;
    existingPlace.files = newData.files || existingPlace.files;
    existingPlace.icon = newData.icon || existingPlace.icon;

    const updatedPlace = await existingPlace.save();

    res.status(200).send(); // 200 OK
  } catch (err) {
    res.status(500).send(err.message); // 500 internal server error
  }
}


/* *** DELETE *** */

async function deletePlace (req, res) {
  try {
    await Place.deleteOne({
      _id: req.params.id
    });
    res.status(200).send(); // 200 OK
  } catch (err) {
    res.status(500).send(err.message);  // 500 internal server error
  }
}


// 
// async function deleteAllPlaces(req, res) {
//   try {
//     await Place.deleteMany({});
//     res.status(200).send(); // 200 OK
//   } catch (err) {
//     res.status(500).send(err.message); // 500 internal server error
//   }
// }
//


module.exports = { createPlace, getPlaces, editPlace, deletePlace };