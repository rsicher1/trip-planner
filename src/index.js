const mapboxgl = require('mapbox-gl');
const marker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXZlcnlsb25nZHJlYW0iLCJhIjoiY2pyOW5kamh2MGJodjQzcW1zNmNmNXZmaSJ9.bOZeD66NQaWI-gaMjzYdjQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v11', // mapbox has lots of different map styles available.
});

marker(-74.009, 40.705, 'activity').addTo(map);

marker(-74.012, 40.711, 'hotel').addTo(map);

marker(-74.004, 40.72, 'restaurant').addTo(map);
