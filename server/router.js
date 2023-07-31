const router = require('express').Router();

const placeController = require('./controller/places');
// const apiController = require('./controller/_api')

router.post('/places', placeController.createPlace);
router.get('/places', placeController.getPlaces);
router.patch('/places/:id', placeController.editPlace);
router.delete('/places/:id', placeController.deletePlace);
// router.delete('/places', placeController.deleteAllPlaces);

// router.get('/api', apiController.fetchData);

module.exports = router;
