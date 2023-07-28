
const mongoose = require('./index.js');

const placeSchema = mongoose.Schema(
  {
    /* *** required fields *** */
    location: {
      type: {
        latitude: Number,
        longitude: Number
      },
      required: true,
    },
    date: {
      type: Date,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String, // file path
      required: true
    },
    /* *** optional fields *** */
    information: {
      type: String,
      required: false
    },
    popUp: {
      type: String,
      required: false
    },
    link: {
      type: String, // URL or link path
      required: false,
    },
    files: [{
      type: String, // URL or file path
      required: false,
    }],
  }
);

// const newPlace = new Place({
//   location: { latitude: 52.5071966, longitude: 13.3778324 },
//   date: new Date(),
//   title: 'Sample Place',
//   icon: 'path/to/icon.png',
//   information: 'Some information about the place',
//   popUp: 'Popup message',
//   files: [
//     'path/to/file1.jpg',
//     'path/to/file2.mp4',
//     'path/to/file3.wav',
//   ],
//   link: 'https://www.example.com',
// });

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
