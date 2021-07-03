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

// let photo = new Photo('x8ZStukS2PM').width(200).height(200).fetch();

// let weekly = new Photo().weekly().fromUser('erondu').fetch();

// let daily = new Photo().daily().search('sun').fetch();

// let sun = new Photo().size(500, 500).search('earth').fetch();


// Random from a specific user
let photo1 = new Photo();
console.log(photo1.fromUser('erondu').size(500, 700).fetch());

// Fixed daily/weekly photo
let photo2 = new Photo();
console.log(photo2.weekly().fetch());

// Random from a user
let photo3 = new Photo();
console.log(photo3.fromUser('erondu').weekly().fetch());

// Random from a search term
let photo4 = new Photo();
console.log(photo4.search('sea').weekly().fetch());

// Random search term
let photo5 = new Photo();
console.log(photo5.featured().search('nature').fetch());

// Specific photo
let photo6 = new Photo('WLUHO9A_xik');
console.log(photo6.size(1600, 900).fetch());