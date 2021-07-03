const Unsplash = require('./index.js');

const api = new Unsplash({
    access_key : 'Ef7ULqjYgVb6Y8YPuna9Z7DFBYCQAUj7fXYt81CMfEQ'
});

console.log(api);

// api.searchPhotos({ query : 'earth' }).then((photos) => {
//     for (photo of photos.results) {
//         console.log(photo.id);
//     }
// });

// api.getPhoto({ photo_id : 'x8ZStukS2PM' }).then((photo) => {
//     console.log(photo);
// });

// console.log(2);