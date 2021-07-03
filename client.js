const Unsplash = require('./src/index.js');

const api = new Unsplash({
    access_key : 'your-key-here'
});

api.searchPhotos({ query : 'earth' }).then((photos) => {
    for (photo of photos.results) {
        console.log(photo.id);
    }
});

api.getPhoto({ photo_id : 'x8ZStukS2PM' }).then((photo) => {
    console.log(photo);
});