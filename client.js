const Unsplash = require('./src/index.js');
const Photo = require('./src/photo.js');

const ACCESS_KEY = '';

// const api = new Unsplash({
//     access_key : ACCESS_KEY || process.env.ACCESS_KEY
// });

// Search photos by keyword
// api.searchPhotos({ query : 'earth' }).then((photos) => {
//     for (photo of photos.results) {
//         console.log(photo.id);
//     }
// });

// Get a random photo
// api.randomPhoto().then((photo) => {
//     console.log(photo);
// });

// Get a photo by id
// api.getPhoto({ photo_id : 'x8ZStukS2PM' }).then((photo) => {
//     console.log(photo);
// });

let photo = new Photo('x8ZStukS2PM').width(200).height(200).fetch();

console.log(photo);