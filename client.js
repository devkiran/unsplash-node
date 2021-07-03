const Unsplash = require('./src/index.js');

const ACCESS_KEY = '';

const api = new Unsplash({
    access_key : ACCESS_KEY || process.env.access_key
});

// Search photos by keyword
api.searchPhotos({ query : 'earth' }).then((photos) => {
    for (photo of photos.results) {
        console.log(photo.id);
    }
});

// Get a photo by id
api.getPhoto({ photo_id : 'x8ZStukS2PM' }).then((photo) => {
    console.log(photo);
});

// Get a random photo
api.randomPhoto().then((photo) => {
    console.log(photo);
});