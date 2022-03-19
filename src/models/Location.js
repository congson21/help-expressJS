const axios = require('axios');

async function getLocation() {
    try {
        const response = await axios.get('http://dataservice.accuweather.com/locations/v1/353412?apikey=3jkIKyycioguxyq8Khb6xm4Ddz0wI6Is')
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getLocation }