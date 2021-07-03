class Photo {

    constructor(id) {
        this.id = id;
        this.dimension = {};
        this.source = 'https://source.unsplash.com';
        this.interval = undefined;
    }

    width(width) {
        this.dimension.width = width;

        return this;
    }

    height(height) {
        this.dimension.height = height;

        return this;
    }

    size(width, height) {
        this.width(width);
        this.height(height);

        return this;
    }

    weekly() {
        this.interval = 'weekly';

        return this;
    }

    daily() {
        this.interval = 'daily';

        return this;
    }

    fromUser(username) {
        this.username = username;

        return this;
    }

    search(keyword) {
        this.keyword = keyword;

        return this;
    }

    featured() {
        this.isFeatured = true;

        return this;
    }

    fetch() {
        let url = this.source;

        if(this.id != undefined) {
            url += `/${this.id}`;
        }

        if(this.username != undefined) {
            url += `/user/${this.username}`;
        }

        if(this.isFeatured != undefined) {
            url += '/featured';
        }

        if(this.dimension.width && this.dimension.height) {
            url += `/${this.dimension.width}x${this.dimension.height}`;
        }

        if(this.interval != undefined) {
            url += `/${this.interval}`;
        }

        if(this.keyword != undefined) {
            url += `?${this.keyword}`;
        }

        return url;
    }
}

module.exports = Photo;