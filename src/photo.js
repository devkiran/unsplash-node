class Photo {

    constructor(id) {
        this.id = id;
        this.dimension = {};
        this.source = 'https://source.unsplash.com';
    }

    width(width) {
        this.dimension.width = width;

        return this;
    }

    height(height) {
        this.dimension.height = height;

        return this;
    }

    fetch() {
        let url = `${this.source}/${this.id}`;

        if(this.dimension.width && this.dimension.height) {
            url += `/${this.dimension.width}x${this.dimension.height}`;
        }

        return url;
    }
}

module.exports = Photo;