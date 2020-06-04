const axios = require('axios');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const encodeUlr = encodeURI(argv.direccion);
console.log(encodeUlr);


//llamamos la instancia del url por AXIOS
const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: { 'x-rapidapi-key': '7388a01e83msh626a8f161c2f694p17024djsna5262f678613' }
});




/* instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR!!!', err);
    });
 */


clima.getClima(40.750000, -74.000000)
    .then(temp => {

        console.log(`El clima de la ciudad de ${argv.direccion} es:${temp-273.15}`);
    });