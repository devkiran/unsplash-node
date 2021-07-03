const https = require('https');

class Unsplash {

    constructor(config) {
        this.client_id = config.access_key;
        this.basePath = 'https://api.unsplash.com';

        if(this.client_id === undefined) {
            throw new Error('You must provide a valid access key.');
        }
    }

    request(path, options) {
        options = options || {}

        let url = new URL(this.basePath + path);
        let result = '';

        let config = {
            headers: {
                Authorization: `Client-ID ${this.client_id}`
            }
        }

        if('query' in options) {
            url.searchParams.set('query', options.query);
            url.searchParams.set('per_page', 10);
        }

        return new Promise((resolve, reject) => {
            https.get(url, config, (response) => {
                response.setEncoding('utf8');

                response.on('data', function(data) {
                    result += data;
                });

                response.on('end', function() {
                    resolve(JSON.parse(result));
                })

                response.on('error', function () {
                    reject(error);
                });
            });
        });
    }

    async searchPhotos(options) {
        let path = '/search/photos';

        return await this.request(path, options);
    }

    async getPhoto(options) {
        let path = '/photos/' + options.photo_id;

        return await this.request(path, options);
    }

    async randomPhoto() {
        let path = '/photos/random';

        return await this.request(path);
    }
}

module.exports = Unsplash;