const Unsplash = require('./src/index.js');
const Photo = require('./src/photo.js');

console.log(new Photo().fromUser('erondu').size(1600, 900).fetch());