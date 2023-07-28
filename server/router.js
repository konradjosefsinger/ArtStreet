const router = require('express').Router();

const placeController = require('./controller/places');

router.post('/places', placeController.createPlace);
router.get('/places', placeController.getPlaces);
router.patch('/places/:id', placeController.editPlace);
router.delete('/places/:id', placeController.deletePlace);

module.exports = router;
