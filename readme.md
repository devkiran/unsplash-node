### Unsplash Source

Source is built for use in small, low-traffic applications.

This is a simple wrapper around the Unsplash Source API.

### References

https://source.unsplash.com/

https://unsplash.com/documentation#example-image-use

```javascript
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
```