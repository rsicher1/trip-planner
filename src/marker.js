const mapboxgl = require('mapbox-gl');

const imageUrls = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

module.exports = (lng, lat, activityType) => {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${imageUrls[activityType]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat([lng, lat]);
};
