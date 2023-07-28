const Place = require('../database/Place');

async function getPlaces (req, res) {
  try {
    const data = await Place.find({});
    res.status(200);
    res.send(data);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
}

async function createPlace (req, res) {
  try {
    const data = req.body;
    const newPlace = await Place.create({
      title: data.title,
      date: data.date,
    });
    res.status(201);
    res.send(newPlace);
  }
  catch (err) {
    res.status(400);
    res.send(err);
  }
}

async function deletePlace (req, res) {
  try {
    await Place.deleteOne({
      _id: req.params.id
    });
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { getPlaces, createPlace, deletePlace };