const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fa33a93ba4412b5f356626a997312fe`);

    return resp.data.main.temp;

}

module.exports = {
    getClima

}