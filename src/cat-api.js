const axios = require('axios');

const RANDOM_CAT_PICTURE_URL = 'https://api.thecatapi.com/v1/images/search';

getKittyPictureUrl = async () => {
    const response = await axios({url: RANDOM_CAT_PICTURE_URL, method: 'GET', responseType: 'json'});
    return response.data[0].url;
}

module.exports = {getKittyPictureUrl};
